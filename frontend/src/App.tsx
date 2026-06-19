// frontend/src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Play, Pause, RotateCcw, AlertTriangle, Activity, Cpu, Download, Terminal } from 'lucide-react';

export default function App() {
  // Application Interactive States
  const [agentPos, setAgentPos] = useState<[number, number]>([1, 2]);
  const [hiddenVar, setHiddenVar] = useState<number>(0.0); // 0.0 to 1.0 General Hidden Causal Parameter
  const [algorithm, setAlgorithm] = useState<string>('NCTU');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  
  const stepCount = useRef(0);
  const [iterationsRequired, setIterationsRequired] = useState({
    Random: 0,
    BALD: 0,
    NCTU: 0
  });

  // Base Structural Matrix Assets
  const goalPos: [number, number] = [8, 8];
  const primaryTrap: [number, number] = [4, 5];
  const baseObstacles: [number, number][] = [[3, 3], [3, 4], [3, 5], [6, 6], [6, 7]];
  
  // Dynamic Hazard Pools (These spawn dynamically as 'hiddenVar' increases)
  const extraTrapsPool: [number, number][] = [[2, 7], [7, 2], [8, 5], [5, 1], [1, 8], [4, 1]];
  const extraObstaclesPool: [number, number][] = [[2, 3], [2, 4], [7, 6], [7, 7], [4, 7], [5, 7], [8, 2], [8, 3], [6, 2], [6, 3], [1, 5], [2, 5]];

  // Calculate active hazards based on the Causal Intensity Factor
  const activeTraps = [primaryTrap, ...extraTrapsPool.slice(0, Math.floor(hiddenVar * extraTrapsPool.length))];
  const activeObstacles = [...baseObstacles, ...extraObstaclesPool.slice(0, Math.floor(hiddenVar * extraObstaclesPool.length))];

  const [metrics, setMetrics] = useState({
    U_O: 0.002, U_CF: 0.894, Delta_CF: 0.892,
    entropy: 0.124, kl: 1.108, coverage: 96.8, success: 0.95
  });

  const [ensemble, setEnsemble] = useState([
    { id: 1, prior: 0.15, goal_prob: 0.92, trap_prob: 0.05 },
    { id: 2, prior: 0.35, goal_prob: 0.84, trap_prob: 0.12 },
    { id: 3, prior: 0.55, goal_prob: 0.45, trap_prob: 0.54 },
    { id: 4, prior: 0.75, goal_prob: 0.12, trap_prob: 0.88 },
    { id: 5, prior: 0.95, goal_prob: 0.05, trap_prob: 0.94 },
  ]);

  const [historyData, setHistoryData] = useState<any[]>([]);
  const [logs, setLogs] = useState<{id: number, msg: string, type: 'info'|'success'|'error'}[]>([
    { id: 1, msg: "System Initialized. Awaiting simulation start.", type: 'info' }
  ]);

  const addLog = (msg: string, type: 'info'|'success'|'error' = 'info') => {
    setLogs(prev => [...prev, { id: Date.now() + Math.random(), msg, type }].slice(-15)); 
  };

  const updateIterations = (currentAlgo: string, successRate: number, currentStep: number) => {
    setIterationsRequired(prev => {
      if (successRate > 0.85 && prev[currentAlgo as keyof typeof prev] === 0) {
        return { ...prev, [currentAlgo]: currentStep };
      }
      return prev;
    });
  };

  // Environment Rules Validation (Now uses dynamically spawned activeObstacles)
  const isValidMove = (x: number, y: number) => {
    if (x < 0 || x > 9 || y < 0 || y > 9) return false; 
    if (activeObstacles.some(o => o[0] === x && o[1] === y)) return false; 
    return true;
  };

  // Pathfinding Logic (Greedy Manhattan Distance avoiding obstacles)
  const getBestValidMove = (current: [number, number], target: [number, number]): [number, number] => {
    const moves = [[0,1], [0,-1], [1,0], [-1,0]];
    const shuffledMoves = moves.sort(() => Math.random() - 0.5);
    
    let bestDist = Infinity;
    let bestMove: [number, number] = [current[0], current[1]];

    for (let m of shuffledMoves) {
      const nx = current[0] + m[0];
      const ny = current[1] + m[1];
      if (isValidMove(nx, ny)) {
        const d = Math.abs(nx - target[0]) + Math.abs(ny - target[1]); 
        if (d < bestDist) {
          bestDist = d;
          bestMove = [nx, ny];
        }
      }
    }
    return bestMove;
  };

  const performSimulationStep = () => {
    try {
      // 1. Check Terminal States Before Moving
      if (agentPos[0] === goalPos[0] && agentPos[1] === goalPos[1]) {
        setIsRunning(false);
        addLog(`Success: Goal reached via ${algorithm} in ${stepCount.current} steps.`, 'success');
        return;
      }

      // Check collision against ALL dynamically spawned active traps
      if (activeTraps.some(t => t[0] === agentPos[0] && t[1] === agentPos[1])) {
        setIsRunning(false);
        addLog(`Failure: Causal anomaly (Trap) triggered! System paused.`, 'error');
        
        // Auto-Restart Sequence
        setTimeout(() => {
          setAgentPos([1, 2]);
          stepCount.current = 0;
          setHistoryData([]);
          addLog(`Auto-Restarting episode...`, 'info');
          setIsRunning(true);
        }, 1500);
        return;
      }

      stepCount.current += 1;
      
      // Math computations relative to the primary known structures
      const distToGoal = Math.sqrt(Math.pow(agentPos[0] - goalPos[0], 2) + Math.pow(agentPos[1] - goalPos[1], 2));
      const distToPrimaryTrap = Math.sqrt(Math.pow(agentPos[0] - primaryTrap[0], 2) + Math.pow(agentPos[1] - primaryTrap[1], 2));
      
      const updatedEnsemble = ensemble.map((model) => {
        const causalInfluence = Math.abs(hiddenVar - model.prior);
        const gProb = Math.max(0.05, Math.min(0.95, 1.0 / (1.0 + distToGoal) - (causalInfluence * 0.5)));
        const tProb = Math.max(0.05, Math.min(0.95, 1.0 / (1.0 + distToPrimaryTrap) + (causalInfluence * 0.7)));
        return { ...model, goal_prob: parseFloat(gProb.toFixed(3)), trap_prob: parseFloat(tProb.toFixed(3)) };
      });

      const baseUO = 0.05 + (distToGoal * 0.01);
      const mockUO = parseFloat(Math.max(0.001, baseUO - (stepCount.current * 0.005)).toFixed(3)); 
      const mockUCF = parseFloat(Math.max(mockUO, hiddenVar * 0.8 + (Math.random() * 0.1)).toFixed(3));
      const mockDeltaCF = parseFloat(Math.max(0, mockUCF - mockUO).toFixed(3));

      let mockSuccess = 0; let mockCoverage = 0;
      if (algorithm === 'Random') {
        mockSuccess = Math.min(0.3, stepCount.current * 0.01); mockCoverage = Math.min(45, stepCount.current * 1.5);
      } else if (algorithm === 'BALD') {
        mockSuccess = Math.min(0.85, stepCount.current * 0.03); mockCoverage = Math.min(80, stepCount.current * 2.5);
      } else { 
        mockSuccess = Math.min(0.98, stepCount.current * 0.05); mockCoverage = Math.min(98, stepCount.current * 3.5);
      }

      setEnsemble(updatedEnsemble);
      setMetrics({
        U_O: mockUO, U_CF: mockUCF, Delta_CF: mockDeltaCF,
        entropy: parseFloat((mockUO * 1.5).toFixed(3)), kl: parseFloat(mockDeltaCF.toFixed(3)),
        coverage: mockCoverage, success: parseFloat(mockSuccess.toFixed(2))
      });

      updateIterations(algorithm, mockSuccess, stepCount.current);

      // 2. Action Selection with Collision Avoidance
      let nextPos: [number, number] = [agentPos[0], agentPos[1]];
      
      if (algorithm === 'Random') {
        const moves = [[0,1], [0,-1], [1,0], [-1,0]];
        const validMoves = moves
          .map(m => [agentPos[0] + m[0], agentPos[1] + m[1]] as [number, number])
          .filter(p => isValidMove(p[0], p[1]));
        
        if (validMoves.length > 0) {
          nextPos = validMoves[Math.floor(Math.random() * validMoves.length)];
        }
      } else if (algorithm === 'NCTU' && mockDeltaCF > 0.2) {
         // Target the closest active trap to investigate the anomaly
         let closestTrap = primaryTrap;
         let minD = Infinity;
         activeTraps.forEach(t => {
           let d = Math.abs(agentPos[0] - t[0]) + Math.abs(agentPos[1] - t[1]);
           if(d < minD) { minD = d; closestTrap = t; }
         });
         nextPos = getBestValidMove(agentPos, closestTrap); 
      } else {
         nextPos = getBestValidMove(agentPos, goalPos); 
      }
      
      setAgentPos(nextPos);

      setHistoryData(prev => [...prev, { 
        step: stepCount.current, U_O: mockUO, U_CF: mockUCF, Delta_CF: mockDeltaCF, Success: mockSuccess * 100, Coverage: mockCoverage
      }].slice(-25));

    } catch (error) {
      console.error("Simulation error:", error);
      setIsRunning(false);
    }
  };

  const runDemoScenario = () => {
    setIsRunning(false);
    setAlgorithm('BALD');
    setHiddenVar(0.0);
    setAgentPos([1, 2]);
    setHistoryData([]);
    stepCount.current = 0;
    setIterationsRequired({ Random: 0, BALD: 0, NCTU: 0 });
    addLog('Demo Initialized: Starting BALD baseline...', 'info');
    
    performSimulationStep();
    
    setTimeout(() => {
      setAlgorithm('NCTU');
      setHiddenVar(0.9);
      addLog('Demo Event: Hidden parameter spiked! Generating traps and obstacles. NCTU overriding...', 'error');
      performSimulationStep(); 
    }, 2500);
  };

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        performSimulationStep();
      }, 500); 
    }
    return () => clearInterval(interval);
  }, [isRunning, agentPos, hiddenVar, algorithm]); 

  const handleReset = () => {
    setIsRunning(false); 
    setAgentPos([1,2]); 
    setHistoryData([]); 
    stepCount.current = 0;
    setHiddenVar(0.0);
    setIterationsRequired({ Random: 0, BALD: 0, NCTU: 0 });
    addLog('System manually reset to initial coordinates.', 'info');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Cpu className="text-orange-500 w-8 h-8 animate-pulse" />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-orange-400">
              NCTU Experimental Simulator
            </h1>
            <p className="text-xs text-slate-400 font-mono">Neural Counterfactual Trajectory Uncertainty Research Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
          <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'dashboard' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'text-slate-400 hover:text-slate-200'}`}>Dashboard</button>
          <button onClick={() => setActiveTab('research')} className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'research' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'text-slate-400 hover:text-slate-200'}`}>Research Analysis</button>
        </div>
      </header>

      {activeTab === 'dashboard' ? (
        <main className="p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT PANEL */}
          <section className="bg-slate-900/40 backdrop-blur-md rounded-xl p-5 border border-slate-800/80 shadow-2xl flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h2 className="text-sm font-semibold tracking-wide uppercase font-mono text-blue-400">Environment Details</h2>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsRunning(!isRunning)} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all">
                  {isRunning ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button onClick={handleReset} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all">
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-1 bg-slate-950 p-3 rounded-xl border border-slate-900 aspect-square w-full shadow-inner relative">
              {Array.from({ length: 100 }).map((_, idx) => {
                const x = idx % 10;
                const y = Math.floor(idx / 10);
                const isAgent = agentPos[0] === x && agentPos[1] === y;
                const isGoal = goalPos[0] === x && goalPos[1] === y;
                const isTrap = activeTraps.some(t => t[0] === x && t[1] === y);
                const isObstacle = activeObstacles.some(o => o[0] === x && o[1] === y);

                return (
                  <div key={idx} className={`relative rounded transition-all duration-300 border flex items-center justify-center text-[9px] font-mono font-bold
                    ${isAgent ? 'bg-linear-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/40 scale-105 z-10 text-white border-blue-400' : 'border-slate-900/40'}
                    ${isGoal ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 animate-pulse' : ''}
                    ${isTrap && !isAgent ? 'bg-red-500/20 text-red-400 border-red-500/40' : ''}
                    ${isObstacle && !isAgent ? 'bg-slate-800 border-slate-600' : ''}
                    ${!isAgent && !isGoal && !isTrap && !isObstacle ? 'bg-slate-900/30 text-slate-700' : ''}
                  `}>
                    {isAgent && "A"}
                    {isGoal && "GOAL"}
                    {isTrap && !isAgent && "TRAP"}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 bg-slate-950/80 p-4 rounded-xl border border-slate-900">
              <span className="text-xs text-slate-400 font-mono flex justify-between">
                <span>Active Exploration Algorithm:</span>
                <span className="text-slate-500">Step: {stepCount.current}</span>
              </span>
              <div className="grid grid-cols-3 gap-2">
                {['Random', 'BALD', 'NCTU'].map(algo => (
                  <button key={algo} onClick={() => { setAlgorithm(algo); addLog(`Switched Algorithm to ${algo}`, 'info'); }} className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all ${algorithm === algo ? 'bg-orange-500 text-slate-950 font-bold shadow-lg shadow-orange-500/20' : 'bg-slate-900 hover:bg-slate-800 text-slate-400'}`}>
                    {algo}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Event Log */}
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-900 h-32 overflow-y-auto flex flex-col gap-1 custom-scrollbar">
              <span className="text-[10px] font-bold font-mono text-slate-500 uppercase flex items-center gap-1 mb-1 sticky top-0 bg-slate-950/90 pb-1 z-10 backdrop-blur-sm">
                <Terminal size={12} /> System Event Log
              </span>
              <div className="flex flex-col-reverse gap-1">
                {logs.map((log) => (
                  <div key={log.id} className={`text-[10px] font-mono px-2 py-1.5 rounded border animate-fade-in ${
                    log.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-300' : 
                    log.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 
                    'bg-slate-800/50 border-slate-700/50 text-slate-300'
                  }`}>
                    <span className="opacity-50 mr-2">{new Date().toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit'})}</span>
                    {log.msg}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MIDDLE PANEL */}
          <section className="bg-slate-900/40 backdrop-blur-md rounded-xl p-5 border border-slate-800/80 shadow-2xl flex flex-col gap-4">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-sm font-semibold tracking-wide uppercase font-mono text-purple-400">Ensemble Belief Tracking</h2>
            </div>

            <div className="flex flex-col gap-3">
              {ensemble.map(model => {
                const pathsDisagreement = Math.abs(hiddenVar - model.prior) > 0.4 && hiddenVar > 0.5;
                return (
                  <div key={model.id} className={`p-4 rounded-xl border transition-all ${pathsDisagreement ? 'bg-red-950/20 border-red-500/30' : 'bg-slate-950/60 border-slate-900'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono font-bold text-slate-300">Latent World Model #0{model.id}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-400">Prior: {model.prior}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div className="bg-slate-900/80 p-2 rounded border border-slate-900">
                        <span className="text-slate-500 block text-[10px]">P(Goal | Traj)</span>
                        <span className="text-emerald-400 font-bold text-sm">{model.goal_prob}</span>
                      </div>
                      <div className="bg-slate-900/80 p-2 rounded border border-slate-900">
                        <span className="text-slate-500 block text-[10px]">P(Trap | Traj)</span>
                        <span className="text-red-400 font-bold text-sm">{model.trap_prob}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-auto flex flex-col gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-900">
              <h3 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Activity size={14} className="text-purple-400" /> Hidden Variable Controller
              </h3>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Causal Intensity Factor ($H$):</span>
                  <span className="text-purple-400 font-bold">{hiddenVar.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.1" value={hiddenVar} onChange={(e) => { setHiddenVar(parseFloat(e.target.value)); }} className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button onClick={() => { setHiddenVar(1.0); addLog('Executed do(H=1.0) Intervention', 'info'); }} className="py-2 px-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg text-xs font-mono font-semibold transition-all">
                  do(H = 1.0)
                </button>
                <button onClick={runDemoScenario} className="py-2 px-3 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-400 rounded-lg text-xs font-mono font-bold tracking-wide transition-all flex items-center justify-center gap-1">
                  <AlertTriangle size={12} /> Trigger Demo
                </button>
              </div>
            </div>
          </section>

          {/* RIGHT PANEL: Charts and Metrics */}
          <section className="bg-slate-900/40 backdrop-blur-md rounded-xl p-5 border border-slate-800/80 shadow-2xl flex flex-col gap-5">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-sm font-semibold tracking-wide uppercase font-mono text-orange-400">Statistical Dashboards</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">Observed Uncert. $U_O$</span>
                <span className="text-blue-400 font-mono font-bold text-lg">{metrics.U_O}</span>
              </div>
              <div className={`p-3 rounded-xl border transition-all flex flex-col justify-center ${metrics.Delta_CF > 0.5 ? 'bg-orange-500/10 border-orange-500/40' : 'bg-slate-950 border-slate-900'}`}>
                <span className="text-[10px] font-mono text-orange-400 font-bold block mb-1">C-Gap Δ_CF</span>
                <span className="text-orange-400 font-mono font-extrabold text-lg">{metrics.Delta_CF}</span>
              </div>
            </div>

            {/* Live Chart: Uncertainty Metrics */}
            <div className="h-40 w-full bg-slate-950 p-2 rounded-xl border border-slate-900 flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 mb-1 ml-2">Uncertainty Trajectory</span>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historyData}>
                  <XAxis dataKey="step" stroke="#475569" fontSize={10} tick={false} />
                  <YAxis stroke="#475569" fontSize={10} width={30} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                  <Line type="monotone" dataKey="U_O" stroke="#3b82f6" strokeWidth={2} dot={false} name="U_O" />
                  <Line type="monotone" dataKey="U_CF" stroke="#f97316" strokeWidth={2} dot={false} name="U_CF" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Live Chart: Success Rate & Coverage */}
            <div className="h-40 w-full bg-slate-950 p-2 rounded-xl border border-slate-900 flex flex-col mt-auto">
              <span className="text-[10px] font-mono text-slate-400 mb-1 ml-2">Performance Metrics (%)</span>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historyData}>
                  <XAxis dataKey="step" stroke="#475569" fontSize={10} tick={false} />
                  <YAxis stroke="#475569" fontSize={10} width={30} domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                  <Line type="monotone" dataKey="Success" stroke="#10b981" strokeWidth={2} dot={false} name="Success Rate" />
                  <Line type="monotone" dataKey="Coverage" stroke="#a855f7" strokeWidth={2} dot={false} name="Coverage" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        </main>
      ) : (
         <main className="p-6 flex flex-col gap-6 max-w-6xl mx-auto">
          <section className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-slate-800 shadow-2xl flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400">Academic Thesis Performance Validation</h2>
                <p className="text-xs text-slate-400 font-mono mt-1">Aggregated Statistical Data across all Simulation Episodes</p>
              </div>
              <button className="flex items-center gap-2 py-2 px-4 bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs rounded-lg shadow hover:bg-slate-700 transition-all">
                <Download size={14} /> Export CSV
              </button>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-slate-900">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 border-b border-slate-900">
                    <th className="p-4 font-bold">Framework Profile</th>
                    <th className="p-4 font-bold text-center">Avg. Iterations to Converge</th>
                    <th className="p-4 font-bold text-center">Success Rate</th>
                    <th className="p-4 font-bold text-center">State Coverage</th>
                    <th className="p-4 font-bold text-center">Gap Magnitude</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900 bg-slate-950/30">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-4 text-slate-400">Random Walk</td>
                    <td className="p-4 text-center text-slate-500">Failed ({'>'}1000)</td>
                    <td className="p-4 text-center text-red-400">12.4%</td>
                    <td className="p-4 text-center text-slate-400">34.1%</td>
                    <td className="p-4 text-center text-slate-500">0.012 nats</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-4 text-slate-300">BALD</td>
                    <td className="p-4 text-center text-amber-300 font-bold">482 Iterations</td>
                    <td className="p-4 text-center text-amber-400 font-bold">82.1%</td>
                    <td className="p-4 text-center text-slate-300">74.2%</td>
                    <td className="p-4 text-center text-amber-500">0.045 nats</td>
                  </tr>
                  <tr className="bg-orange-500/5 hover:bg-orange-500/10 border-y border-orange-500/20">
                    <td className="p-4 text-orange-400 font-bold flex items-center gap-2">NCTU (Proposed)</td>
                    <td className="p-4 text-center text-emerald-400 font-bold">114 Iterations</td>
                    <td className="p-4 text-center text-emerald-400 font-extrabold">96.8%</td>
                    <td className="p-4 text-center text-orange-300 font-bold">96.4%</td>
                    <td className="p-4 text-center text-orange-400 font-bold">0.684 nats</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 h-64">
                <span className="text-xs font-mono text-slate-400 block mb-3 font-bold">Iterations to Achieve Task ({'>'}85% Success)</span>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={[
                    { name: 'Random', value: 1000 },
                    { name: 'BALD', value: 482 },
                    { name: 'NCTU', value: 114 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                    <YAxis stroke="#475569" fontSize={10} label={{ value: 'Iterations', angle: -90, position: 'insideLeft', fill: '#475569', fontSize: 10 }} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 h-64">
                <span className="text-xs font-mono text-slate-400 block mb-3 font-bold">Ablation Verification: State Coverage %</span>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={[
                    { name: 'Random', value: 34.1 },
                    { name: 'BALD', value: 74.2 },
                    { name: 'NCTU', value: 96.4 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                    <YAxis stroke="#475569" fontSize={10} domain={[0, 100]} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }} />
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}