const toolsData = [
  {
    id: 'gemini-advanced',
    name: 'Gemini Advanced',
    group: 'General Assistant',
    tags: ['All', 'Assistant', 'Ideation'],
    description: 'Chatbot trung tâm xử lý mọi định dạng. Khả năng liên kết trực tiếp vào Workspace cá nhân qua tính năng Extensions.',
    icon: '🤖',
    features: [
      'Phân tích ngữ cảnh lên tới 2 triệu token (đọc hàng trăm trang PDF).',
      'Liên kết Extension tự động quét Gmail, Drive, Docs nội bộ.',
      'Khả năng đọc mã nguồn (code) và giả lập chạy thử code lập trình.'
    ],
    application: 'Sử dụng như một "Trợ lý trưởng". Hãy giao việc lên ý tưởng ban đầu, nhờ tóm tắt một loạt email chưa đọc mỗi sáng, hoặc ra lệnh tìm kiếm, móc nối nhanh các báo cáo cũ lưu lạc trong Drive mà không cần tự lục tìm.'
  },
  {
    id: 'notebooklm',
    name: 'Google NotebookLM',
    group: 'Research & Data Synthesis',
    tags: ['All', 'Research', 'Data_Synthesis'],
    description: 'Máy lọc tri thức sử dụng công nghệ RAG. Lọc và tổng hợp các báo cáo phức tạp không bao giờ sợ sai lệch (hallucinate).',
    icon: '📓',
    features: [
      'Chỉ được phép trả lời dựa trên file nguồn của bạn (PDF, Web, Audio), chống "ảo giác" 100%.',
      'Audio Overview: Tạo Podcast tự nhiên có 2 người thảo luận từ tài liệu văn bản khô khan.',
      'Ghi chú thông minh, trích xuất chính xác nguồn dẫn (citation) tới dòng nào trang mấy.'
    ],
    application: 'Dành cho báo cáo chuyên sâu. Bạn nhét 10 bài nghiên cứu / báo cáo thị trường vào để AI tổng hợp thành dàn ý chi tiết. Cực kỳ hiệu quả cho tác giả muốn rà soát logic nội dung hoặc sinh viên làm luận văn.'
  },
  {
    id: 'workspace-ai',
    name: 'Workspace AI (Docs, Sheets)',
    group: 'Office Execution',
    tags: ['All', 'Office', 'Writing'],
    description: 'Quyền năng AI nhúng thẳng vào luồng làm việc. Gọi trợ lý "Help me write" để tự soạn thảo hoặc vẽ số liệu trong nháy mắt.',
    icon: '📝',
    features: [
      'Gmail: Nhấn "Help me write" để tự động soạn nháp email dài, tùy chỉnh giọng điệu chuyên nghiệp.',
      'Docs: Nằm ngay ngoài lề trang giấy để gợi ý soạn thảo, chèn bảng nhanh chóng.',
      'Sheets: Dựa trên text bạn mô tả, nó tự động viết ra công thức phức tạp hoặc làm sạch hàng ngàn cột lỗi.'
    ],
    application: 'Thực thi vòng lặp công việc mỗi ngày. Bạn gửi báo giá cho khách, nhờ nó nháp email thông báo trang trọng, hoặc dùng Sheets AI để tự đánh dấu đỏ các giao dịch lỗi trong bảng kế toán cuối tháng chớp mắt.'
  },
  {
    id: 'google-vids',
    name: 'Google Vids',
    group: 'Multimedia Generation',
    tags: ['All', 'Multimedia', 'Video_Generation'],
    description: 'Trợ lý hướng dẫn làm video cực mạnh. Đi từ Outline kịch bản Text sang thẳng bản Video có Cảnh quay, Slide và lồng tiếng tự động.',
    icon: '🎥',
    features: [
      'Dễ dàng biến nguyên 1 file Docs kịch bản khô khan trực tiếp phân rã thành phân cảnh Video thuyết trình.',
      'Tự động tìm kiếm nguồn ảnh/video có bản quyền khớp sát rạt với nội dung thoại.',
      'Cung cấp AI Voiceover lồng tiếng cực kỳ tự nhiên, biết tự ngắt đoạn và tự điều tốc phù hợp.'
    ],
    application: 'Tuyệt đỉnh để Solo-craetor tạo nhanh các clip báo cáo nhân sự tháng để "giảm chán" cho sếp, lập video tutorial hướng dẫn dùng sản phẩm cho khách mà mình chẳng cần kỹ thuật phần mềm Premiere.'
  },
  {
    id: 'imagen-3',
    name: 'Imagen 3',
    group: 'Multimedia Generation',
    tags: ['All', 'Multimedia', 'Image_Generation'],
    description: 'Tạo hình ảnh chân thực, hỗ trợ Typography cho ấn phẩm Quảng Cáo trực tiếp qua ứng dụng Web Gemini.',
    icon: '🖼️',
    features: [
      'Vẽ hình ảnh siêu chân thực với chi tiết ánh sáng chuẩn cấp độ máy ảnh Studio.',
      'Render ký tự chữ chính xác vào bên tỏng tấm ảnh (Rất ít AI hiện nay gõ đúng text trên ảnh ngẫu nhiên).',
      'Được nhúng luôn vào trình duyệt Web Gemini nên bạn có thể yêu cầu Gen lại hàng nghìn biến thể miễn phí.'
    ],
    application: 'Cực lợi hại để làm hình ảnh minh họa cho các Post mạng xã hội, hoặc chế tác mock-up logo vào hộp sản phẩm mẫu để xin ý kiến đối tác trước khi tốn tiền In thực tế.'
  },
  {
    id: 'project-idx',
    name: 'Project IDX',
    group: 'Coding & Developer',
    tags: ['All', 'Coding', 'Developer'],
    description: 'Cloud IDE chuyên sâu. Mở Tab là code, gọi Gemini tự động viết Functions. Tích hợp màn giả lập cực tốc độ.',
    icon: '💻',
    features: [
      'Là một Môi trường phát triển trên chính trình duyệt, khỏi cần cài cắm máy tính lằng nhằng.',
      'Trợ lý Gemini bắt lỗi code tự động, gợi ý Code logic ngay trong lúc gõ IDE.',
      'Có hẳn màn hình Simulator (ảo hóa iOS/Android/Web) bật sẵn để test app tức thời trực quan.'
    ],
    application: 'Vũ khí siêu hạng của dận "Thợ gõ solo" (Freelancer Code). Chạy nhảy lên bất kỳ máy tính tiệm net nào, mở trình duyệt là log thẳng vào kho code và bấm Deploy sản phẩm lên cloud không cần sợ lệch biến môi trường.'
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    group: 'Coding & Developer',
    tags: ['All', 'Coding', 'Developer'],
    description: 'Nền tảng kiểm thử Prompt Engine & API Key. Test được độ phức tạp và khả năng phi lý của LLM Flash/Pro/Ultra.',
    icon: '⚙️',
    features: [
      'Khu vực lõi để tạo API Key miễn phí kết nối Gemini vào phần mềm riêng của bạn.',
      'Cho chức năng Tinh chỉnh biến System Instructions cứng rắn bắt AI trả lời theo format chuỗi siêu khó.',
      'Quota cực khủng, rate-limit miễn phí gần như rất lớn cho cá nhân phát triển.'
    ],
    application: 'Nơi kiểm chứng khi lên quy trình thiết kế Chatbot chăm sóc khách hàng công ty. Build sẵn luồng kịch bản hội thoại để tích hợp AI Studio vào Facebook Page, hoặc Telegram của bạn.'
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
