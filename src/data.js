export const projects = [
  {
    title: 'Support Chat',
    tag: 'Personal project',
    summary:
      'A self-hosted, embeddable support chat on Matrix (Synapse). Customers talk to a streaming LLM agent, and chats escalate to a human through a queue with automatic assignment and a stored summary.',
    points: [
      'YAML-configured, hot-reloadable tool system with email (SMTP) and HMAC-signed webhook handlers.',
      'Shadow DOM widget plus a separate agent console UI.',
      'Fixed a race where two code paths assigned the same chat by serialising assignment behind one lock.',
      'Agent availability needs a recent heartbeat, so a closed tab never leaves an agent online.',
      '11-step automated smoke test. Text only with end-to-end encryption.',
    ],
    stack: ['Node.js', 'TypeScript', 'Matrix', 'PostgreSQL', 'Docker Compose', 'Caddy'],
    repo: 'https://github.com/sanuxp/support-chat',
  },
  {
    title: 'Support Chat on LiveKit',
    tag: 'Personal project',
    summary:
      'The same support product rebuilt with LiveKit as the realtime layer instead of Matrix. A conversation is a LiveKit room, which leaves room to add voice and video as extra participants later.',
    points: [
      'Embeddable Shadow DOM widget and a React console for human agents.',
      'AI answers first, then escalates to a human in the same conversation. A human has to accept it, and if nobody does within a timeout it returns to the AI.',
      'Messages stored in PostgreSQL and pushed to clients as LiveKit data packets; clients ignore any packet that did not come from the server.',
      'Tools and prompts are editable in config files with no code changes.',
    ],
    stack: ['Node.js', 'TypeScript', 'LiveKit', 'PostgreSQL', 'React', 'Docker Compose', 'Caddy'],
    repo: 'https://github.com/sanuxp/Chat-LiveKit',
  },
  {
    title: 'CHESS',
    tag: 'Personal project',
    summary:
      'A local two-player chess game with animated moves, the full rules of chess, undo, and PGN export for review with engines. The same game is built in several stacks so they can be compared.',
    points: [
      'C++17 with SDL2 and Flutter versions are playable. A Godot version is planned.',
      'Shared rules documents and test data keep every stack consistent; the Flutter version passes 73 tests.',
      'Themes for board colours, piece sets and interface palettes. A pre-push hook runs the tests.',
    ],
    stack: ['C++17', 'SDL2', 'Flutter', 'Dart'],
    repo: 'https://github.com/sanuxp/CHESS-app',
  },
  {
    title: 'Deepfake Detection',
    tag: 'Personal project',
    summary:
      'Fine-tuned an ImageNet-pretrained XceptionNet on Celeb-DF v2, trained on a 4 GB laptop GPU.',
    metrics: [
      ['0.9988', 'video AUC'],
      ['98.65%', 'video accuracy'],
      ['98.44%', 'balanced acc.'],
    ],
    points: [
      'Resumable multi-process pipeline: 102,921 face crops from 6,529 videos.',
      'Identity-level validation split and class-balanced sampling for a ~7:1 imbalance.',
      'Scored on the official 518-video test set of the same dataset.',
    ],
    note: 'Same-dataset evaluation only. Not tested on other datasets, so no claim that it generalises.',
    stack: ['PyTorch', 'timm', 'OpenCV', 'scikit-learn'],
  },
]

export const nav = [['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['Contact', '#contact']]

// Order matters: Hero reuses the first two (GitHub, LinkedIn).
export const contact = {
  email: 'sanu848114@gmail.com',
  profiles: [
    { label: 'github.com/sanuxp', href: 'https://github.com/sanuxp' },
    { label: 'linkedin.com/in/sanukumar7268', href: 'https://linkedin.com/in/sanukumar7268' },
    { label: 'leetcode.com/u/sanu848114', href: 'https://leetcode.com/u/sanu848114' },
  ],
}

export const background = [
  {
    when: 'Jul 2025 – Present',
    where: 'Bangalore',
    title: 'Software Engineer · Accelnomics Technologies',
    text: 'Backend and full-stack engineering on an enterprise workflow automation platform.',
  },
  {
    when: '2021 – 2025',
    where: 'Bhopal',
    title: 'B.Tech, Computer Science (AI & ML) · Sagar Institute of Research and Technology',
    points: [
      '1st place among 400 participants in a college-level coding competition.',
      'Led a 20-member team that organised a state-level hackathon with 500+ participants.',
      'Solved 300+ problems on LeetCode.',
    ],
  },
  {
    when: 'My life',
    text: 'Chess is a part of my life. Want to lose a game?',
    links: [
      { label: 'Challenge me on chess.com', href: 'https://www.chess.com/member/blackhole_xe' },
      { label: 'FIDE profile', href: 'https://ratings.fide.com/profile/558055479' },
    ],
  },
]

export const skills = {
  'Languages & backend': ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'REST APIs'],
  Frontend: ['React', 'HTML & CSS', 'Shadow DOM widgets', 'Three.js'],
  'Data & infra': ['PostgreSQL', 'pgvector', 'MongoDB', 'Redis', 'Docker', 'Linux', 'Git'],
  'ML & AI': ['PyTorch', 'timm', 'OpenCV', 'scikit-learn', 'LLM tool calling', 'RAG'],
}
