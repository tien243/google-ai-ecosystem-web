const toolsData = [
  {
    id: 'gemini-advanced',
    name: 'Gemini Advanced',
    group: 'General Assistant',
    tags: ['All', 'Assistant', 'Ideation'],
    description: 'Chatbot trung tâm xử lý mọi định dạng. Khả năng liên kết trực tiếp vào Workspace cá nhân qua tính năng Extensions.',
    icon: '🤖',
  },
  {
    id: 'notebooklm',
    name: 'Google NotebookLM',
    group: 'Research & Data Synthesis',
    tags: ['All', 'Research', 'Data_Synthesis'],
    description: 'Máy lọc tri thức sử dụng công nghệ RAG. Lọc và tổng hợp các báo cáo phức tạp không bao giờ sợ sai (hallucinate).',
    icon: '📓',
  },
  {
    id: 'workspace-ai',
    name: 'Workspace AI (Docs, Sheets)',
    group: 'Office Execution',
    tags: ['All', 'Office', 'Writing'],
    description: 'Quyền năng AI nhúng thẳng vào luồng làm việc. Gọi trợ lý "Help me write" để tự soạn thảo hoặc vẽ số liệu.',
    icon: '📝',
  },
  {
    id: 'google-vids',
    name: 'Google Vids',
    group: 'Multimedia Generation',
    tags: ['All', 'Multimedia', 'Video_Generation'],
    description: 'Trợ lý video cực mạnh. Đi từ Outline kịch bản Text sang thẳng mảng Video có Footage, Slide và lồng tiếng tự động.',
    icon: '🎥',
  },
  {
    id: 'imagen-3',
    name: 'Imagen 3',
    group: 'Multimedia Generation',
    tags: ['All', 'Multimedia', 'Image_Generation'],
    description: 'Tạo hình ảnh chân thực, hỗ trợ Typography cho ấn phẩm Quảng Cáo trực tiếp qua ứng dụng Web Gemini.',
    icon: '🖼️',
  },
  {
    id: 'project-idx',
    name: 'Project IDX',
    group: 'Coding & Developer',
    tags: ['All', 'Coding', 'Developer'],
    description: 'Cloud IDE chuyên sâu. Mở Tab là code, gọi Gemini tự động viết Functions. Tích hợp màn giả lập cực tốc độ.',
    icon: '💻',
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    group: 'Coding & Developer',
    tags: ['All', 'Coding', 'Developer'],
    description: 'Nền tảng kiểm thử Prompt Engine & API Key. Test được độ phức tạp nhất của LLM Flash/Pro/Ultra.',
    icon: '⚙️',
  }
];

const workflowsData = [
  {
    id: 'content-creator',
    title: 'Dây Chuyền Sản Xuất Nội Dung',
    role: 'Content Creator / Marketer',
    steps: [
      { step: 1, tool: 'Gemini Advanced', description: 'Brainstorm & Ideation: Quét dữ liệu file thô trên Drive cũ để bắt xu hướng mới.' },
      { step: 2, tool: 'NotebookLM', description: 'Synthesize: Đẩy PDF Market Report vào, lấy Outline chuẩn Logic 100% không bịa.' },
      { step: 3, tool: 'Google Docs', description: 'Scripting: "Help me write", chèn ngay quả Outline kia để auto viết bài 3000 chữ.' },
      { step: 4, tool: 'Google Vids', description: 'Production: Bấm nút để chuyển Doc kia thành Video Marketing kèm Voiceover lồng siêu mượt.' }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Luồng Xử Lý Báo Cáo Tài Chính',
    role: 'Data / Admin / Manger',
    steps: [
      { step: 1, tool: 'Google Sheets', description: 'Raw Import: Đổ cục CSV bẩn vào. AI tự Format gọn, vẽ công thức SUM/AVERAGE cực xịn.' },
      { step: 2, tool: 'Gemini Advanced', description: 'Insight Find: Kéo bảng này thả vào Gemini "Nêu 3 điểm bất thường nhất trong chi tiêu này".' },
      { step: 3, tool: 'Google Slides', description: 'Polishing: Paste Insight đó nhờ vẽ Slide báo cáo và tạo Layout đồ họa auto cho đẹp.' }
    ]
  },
  {
    id: 'solo-dev',
    title: 'Xưởng Sản Xuất Mini-App Solo',
    role: 'Solo Developer',
    steps: [
      { step: 1, tool: 'Google AI Studio', description: 'Proto Logic: Nhấn F12 gọi System Instructions để nắn dòng Output LLM cực gắt gao.' },
      { step: 2, tool: 'Project IDX', description: 'Fullstack Deploy: Code ngay trên Chrome, dùng Gemini gõ hộ Backend, Test lên mạng luôn.' }
    ]
  }
];

const getUniqueTags = () => {
    const allTags = toolsData.flatMap(tool => tool.tags);
    return [...new Set(allTags)];
};
