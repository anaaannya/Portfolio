
import React, { useState, useEffect, useRef } from 'react';

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'ANANYA_SARKAR_LAB v2.5.0-LTS (tty1)',
    'System initialization... [OK]',
    'Type "help" to list available binary commands.',
    '',
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const generateScan = () => {
    const ports = [21, 22, 80, 443, 8080, 3306, 5432];
    const services = ['ftp', 'ssh', 'http', 'https', 'http-alt', 'mysql', 'postgresql'];
    const selectedPorts = ports.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    let res = [
      'Starting Nmap 7.94 ( https://nmap.org ) at 2024-SESSION_DATE',
      'Nmap scan report for 127.0.0.1',
      'Host is up (0.00045s latency).',
      'Not shown: 997 closed tcp ports (reset)',
      'PORT     STATE SERVICE',
    ];

    selectedPorts.forEach(p => {
      const s = services[ports.indexOf(p)];
      res.push(`${p}/tcp   open  ${s}`);
    });

    res.push('');
    res.push('[!] WARNING: Potential vulnerability detected: CVE-2024-XSS-LAB');
    res.push('Nmap done: 1 IP address (1 host up) scanned in 1.42 seconds');
    
    return res.join('\n');
  };

  const getManual = (cmd: string) => {
    const manuals: Record<string, string> = {
      whoami: 'NAME: whoami - print effective user ID\nDESCRIPTION: Displays the current user profile, role, and operational status.',
      ls: 'NAME: ls - list directory contents\nDESCRIPTION: Lists resources. Usage: "ls skills", "ls certs", "ls blogs", or "ls tools".',
      cat: 'NAME: cat - concatenate files and print on the standard output\nDESCRIPTION: Reads the content of a specific record. Usage: "cat experience" or "cat status.txt".',
      scan: 'NAME: scan - network security audit\nDESCRIPTION: Simulates an automated Nmap network scan to identify open ports and vulnerabilities.',
      help: 'NAME: help - display information about builtin commands\nDESCRIPTION: Lists all executable binaries available in the current shell.',
      ps: 'NAME: ps - report a snapshot of current processes\nDESCRIPTION: Shows active background tasks running in the portfolio environment.',
      ifconfig: 'NAME: ifconfig - configure network interface\nDESCRIPTION: Displays network parameters, local IP, and physical location metadata.',
      clear: 'NAME: clear - clear the terminal screen\nDESCRIPTION: Flushes the scrollback buffer and resets the terminal interface.',
      man: 'NAME: man - an interface to the system reference manuals\nDESCRIPTION: Displays the manual page for a specified command. Usage: "man <command>".',
      'mission.sh': 'NAME: mission.sh - execute core mission script\nDESCRIPTION: Prints the primary objective and professional philosophy of the system owner.'
    };
    return manuals[cmd] || `No manual entry for ${cmd}`;
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCmd = input.toLowerCase().trim();
    const args = fullCmd.split(' ');
    const cmd = args[0];
    let response: string | string[] = '';

    if (cmd === 'man') {
      if (args.length < 2) {
        response = '[USAGE] man <command_name>';
      } else {
        const target = args[1].replace('./', '');
        response = getManual(target);
      }
    } else {
      switch (cmd) {
        case 'help':
          response = '[OK] BINARIES_LOADED: whoami, ls <skills|certs|blogs|tools>, cat <experience|status.txt>, ./mission.sh, scan, man, ps -aux, ifconfig, clear';
          break;
        case 'whoami':
          response = '[ID] USER: ananya_sarkar | ROLE: Mid-Level Executive | CLASS: Frontend-Security Hybrid | STATUS: Active_Learning';
          break;
        case 'ls':
          const sub = args[1];
          if (sub === 'blogs') {
            response = [
              '[INFO] LINKS_RECOVERED:',
              './hobby_reviews.lnk -> reviews.ananyasarkar.dev (Books/Movies)',
              './security_notes.lnk -> notes.ananyasarkar.dev/cyber (Pentest Logs)'
            ].join('\n');
          } else if (sub === 'skills') {
            response = '[OK] STACK_DUMP: HTML5, CSS3, Bootstrap 4, Figma, WordPress, Responsive Design, Canva Pro, Networking, Pentesting';
          } else if (sub === 'certs') {
            response = '[INFO] CRYPTO_VAL_OK: Coursera_Web_Dev, IDF_Advanced_UI, THM_Pre_Security, THM_Intro_Cyber, THM_Jr_Pentester (Active)';
          } else if (sub === 'tools') {
            response = '[OK] TOOLKIT_AUDIT: [Net] Nmap, Wireshark | [Web] Burp Suite, SQLmap, Gobuster | [Exploit] Metasploit';
          } else {
            response = '[USAGE] ls <skills|certs|blogs|tools>';
          }
          break;
        case 'cat':
          if (args[1] === 'experience') {
            response = '[OK] EXP_FETCHED: [1] TechSolutions India: Mid-Level Frontend Executive (Current) | [2] Creative Pixel Agency: UI/UX Designer (Archived)';
          } else if (args[1] === 'status.txt') {
            response = '[STATUS] LOG: Path: Junior Penetration Tester | Progress: 70+ rooms | Platform: TryHackMe | Focus: Web App Sec';
          } else {
            response = '[USAGE] cat <experience|status.txt>';
          }
          break;
        case './mission.sh':
        case 'mission.sh':
          response = '[EXEC] RUNNING mission.sh: Initializing objective... "Merging high-end UI aesthetics with military-grade application security."';
          break;
        case 'ps':
          response = '[SYS] PID 1024: Designing_Dashboard | PID 2048: TryHackMe_Lab | PID 4096: Reading_Books';
          break;
        case 'ifconfig':
          response = '[NET] eth0: ananya.sarkar@lab.dev | loc: West Bengal, IN | status: UP BROADCAST RUNNING';
          break;
        case 'scan':
          response = generateScan();
          break;
        case 'clear':
          setHistory(['Terminal buffer flushed.']);
          setInput('');
          return;
        default:
          response = `-bash: ${cmd}: command not found. Reference "help" for valid ops.`;
      }
    }

    setHistory(prev => [...prev, `ananya@lab:~$ ${input}`, response, '']);
    setInput('');
  };

  return (
    <div className="bg-black/95 rounded-xl border-2 border-green-900 font-mono shadow-[0_0_40px_rgba(34,197,94,0.1)] overflow-hidden">
      <div className="bg-green-950/20 px-4 py-2 border-b border-green-900 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-900/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-900/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-900/50"></div>
        </div>
        <div className="text-[10px] text-green-900 font-bold uppercase tracking-widest">ananya@secure-lab: ~</div>
      </div>
      <div 
        ref={scrollRef}
        className="p-6 h-72 overflow-y-auto text-[11px] md:text-xs text-green-500/90 space-y-1 custom-scrollbar leading-relaxed"
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2 pt-1">
          <span className="text-green-700 font-bold">ananya@lab:~$</span>
          <input 
            autoFocus
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none caret-green-500 text-green-200"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};
