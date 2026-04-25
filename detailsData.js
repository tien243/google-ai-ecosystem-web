const toolsDetailData = {
    'gemini-advanced': {
        heroTitle: 'Gemini Advanced - Khối Óc Trung Tâm Đa Nghề',
        subtitle: 'Phiên bản cao cấp vận hành bằng mô hình Gemini 1.5 Pro. Nó không chỉ dùng để Chat, mà là một cỗ máy phân tích dữ liệu siêu lớn.',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Công Nghệ Lõi Đứng Sau',
                content: 'Sở hữu "Cửa sổ ngữ cảnh" (Context Window) lên đến 2 triệu token. Điều này phá vỡ mọi quy chuẩn AI trước đây. Bạn có thể ném vào đó 3 cuốn tiểu thuyết, 1 giờ video thời sự, hoặc bộ source code website hàng chục ngàn dòng trong vỏn vẹn một câu lệnh (Prompt).'
            },
            {
                type: 'deep-features',
                title: '🔥 Các Tính Năng Chuyên Sâu Tối Thượng',
                items: [
                    { name: 'Workspace Extensions (Siêu liên kết nội bộ)', desc: 'Điểm ăn tiền nhất so với ChatGPT. Gemini tự động trích xuất các luồng Email chưa đọc, tìm và đối soát báo cáo tháng trước nằm khuất trên Google Drive rồi làm cho bạn 1 bảng thống kê siêu gọn gàng.' },
                    { name: 'Advanced Data Analysis (Trình chạy Code Ẩn)', desc: 'Tính năng Data xuất sắc. Khi bạn nhờ nó vẽ một biểu đồ phức tạp từ một file CSV nhàm chán, AI sẽ tự động kích hoạt máy chủ nhỏ, viết code Python đằng sau và xuất ra biểu đồ Interactive cực kỳ chính xác.' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Định Hướng Lắp Ráp Của Solo Worker',
                content: 'Thay vì dùng nó như Wikipedia để tra cứu, hãy định vị đây là "Chuyên viên quản lý dự án". Dùng nó ở ĐẦU chu trình làm việc, ném tài liệu quy chuẩn vào để nó vạch ra kế hoạch (Roadmap), phân tích file Brief của khách hàng và đề xuất cấu trúc cho các ứng dụng khác.'
            }
        ]
    },
    'notebooklm': {
        heroTitle: 'NotebookLM - Chuyên Gia Nghiên Cứu Cá Nhân',
        subtitle: 'Công cụ duy nhất hiện tại đạt cảnh giới: KIÊN QUYẾT KHÔNG ẢO GIÁC (Zero Hallucination).',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Công Nghệ Lõi Đứng Sau',
                content: 'Vận hành dựa trên công nghệ RAG (Retrieval-Augmented Generation). Bạn tạo ra các "Cuốn Sổ" (Notebook), nhét tài liệu tĩnh (PDF, URL, Audio, Youtube) vào. Công cụ sẽ GIỚI HẠN không gian suy nghĩ của AI CHỈ NẰM TRONG tài liệu của bạn. Nó hoàn toàn mù tịt ngoài thế giới, đảm bảo độ chính xác triệt để.'
            },
            {
                type: 'deep-features',
                title: '🔥 Các Tính Năng Chuyên Sâu Tối Thượng',
                items: [
                    { name: 'Tính Năng "Audio Overview" Gây Bão Toàn Cầu', desc: 'Nhấn 1 nút, AI sẽ rà soát 200 trang tài liệu kỹ thuật dài dòng, và tổng hợp thành 1 file Podcast dài 15 phút. Bạn sẽ nghe hai chuyên gia nam/nữ (AI Voice siêu tự nhiên) ngồi trò chuyện, châm biếm, thảo luận và diễn giải mớ tài liệu đó.' },
                    { name: 'Citations (Trích dẫn Minhh Bạch)', desc: 'Mỗi lời AI phát biểu ra đều có gắn thẻ ID [1], [2]. Bấm vào đó, nó nhảy ra màn hình báo ngay: Tôi lấy kết luận này từ câu B dòng thứ 3 trong cuốn PDF thứ 4 của bạn.' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Định Hướng Lắp Ráp Của Solo Worker',
                content: 'Công cụ tử thần dành cho Content Creator, Người viết sách, và Học thuật. Trước đây bạn mất 1 tuần để đọc sạch đống giấy tờ báo cáo xu hướng. Giờ ném vào NotebookLM, tạo 1 cái Audio Overview để cắm tai nghe trên đường đi nhậu là bạn thấm nhuần mọi ngóc ngách của Data.'
            }
        ]
    },
    'workspace-ai': {
        heroTitle: 'Workspace AI - Cỗ Máy Vận Hành Công Sở',
        subtitle: 'Quyền lực của Gemini được "băm nhỏ" ra và nhúng trực tiếp vào thanh công cụ của Docs, Sheets, Slides, Gmail.',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Bản Chất',
                content: 'Giúp bạn "thoát khỏi tab Chrome". Không cần phải copy chữ từ ChatGPT rồi lật đật paste qua Word căn lại lề ngang dọc nữa. AI nằm ngay bên cạnh dấu nháy chuột của bạn.'
            },
            {
                type: 'deep-features',
                title: '🔥 Loạt "Phép Thuật" Nổi Bật',
                items: [
                    { name: 'Gmail - Tự động viết theo phong cách', desc: 'Tính năng "Help me write": Chỉ cần gõ lệnh phác "Tôi muốn từ chối nhẹ nhàng hợp đồng này". AI soạn nguyên văn mail, và có các nút Lịch Sự Hơn (Formalize) hay Ngắn Ruts lại (Shorten).' },
                    { name: 'Google Sheets - Dựng Bảng Bằng Từ Ngữ', desc: 'Thay vì vắt óc học hàm VLOOKUP, bạn chỉ cần gõ "Dựng cho tôi 1 bảng tính theo dõi ngân sách làm Marketing có dự đoán chi phí rác". Bảng tự mọc lên. Khả năng loại bỏ dòng dữ liệu lỗi trong vòng 3 giây.' },
                    { name: 'Google Meet - Thư Ký Bất Ly Thân', desc: 'Bật cuộc họp lên, tính năng Duet (Gemini For Meet) ghi âm ngầm, bắt nội dung và tự chia thành list "Quyết định A, Quyết định B". Ra khỏi họp có ngay Minutes Report.' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Định Hướng Của Solo Worker',
                content: 'Hầu hết dân Solo bị ngập trong giấy tờ quy trình khiến họ thiếu thời gian sản xuất (Làm Content/Code). Workspace AI là công cụ sinh ra giúp gọt tỷ lệ làm vận hành từ 40% xuống còn 5%. Cứ rập khuôn bằng Help-me-write.'
            }
        ]
    },
    'google-vids': {
        heroTitle: 'Google Vids - Xưởng Phim Cá Nhân',
        subtitle: 'Cuộc cách mạng làm Video trình chiếu, Marketing và Nội bộ dành cho dân mù tịt về biên tập phần mềm Premiere.',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Công Nghệ Hoạt Động',
                content: 'Là ứng dụng gốc rễ mới toanh kết hợp cả Video/Audio/Slides Generation. Đặc quyền là chạy nguyên tử trên nền tảng đám mây, sử dụng các stock Video được chứng chỉ bản quyền và tự đồng bộ Timeline hình – tiếng.'
            },
            {
                type: 'deep-features',
                title: '🔥 Các Tính Năng Chuyên Sâu Tối Thượng',
                items: [
                    { name: 'Document-to-Video Workflow', desc: 'Trực tiếp chọn phân khu dữ liệu trong Docs hoặc Drive, yêu cầu tạo nội dung. AI tự động lập kịch bản dài (storyboard) làm 5 cảnh quay.' },
                    { name: 'AI Voiceover Studio', desc: 'Gõ chữ, các giọng lồng tiếng siêu cấp chân thật có sẵn tự động đọc, nhấn nhá ngữ điệu. Đặc biệt: Hình ảnh Stock sẽ tự canh lề nhịp nhàng với nhịp đọc của Voiceover.' },
                    { name: 'Đóng gói Recording & Teleprompter', desc: 'Trong Vids có trình nhắc chữ (teleprompter). Thích hợp cho bạn đặt camera máy tính lên, thu hình lại mặt mình mà mắt vẫn đang đọc chữ mượt mà như MC truyền hình.' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Phân Khúc Ứng Dụng Hàng Ngày',
                content: 'Mọi thứ cần "Báo cáo" giờ được Vids thay bằng "Kể chuyên". Solo worker dùng nó làm Video giải thích sản phẩm cực nhanh cho đối tác. Marketer dùng Vids làm chuỗi Video dạng dọc Tiktok ngắn chỉ tốn đúng 10 phút, với nguồn ảnh stock vô hạn.'
            }
        ]
    },
    'imagen-3': {
        heroTitle: 'Imagen 3 - Máy Sinh Hình Ảnh Chân Thực',
        subtitle: 'Sự trỗi dậy của Google trong mảng AI vẽ hình. Vượt trội về khả năng thấu hiểu chi tiết trong ngôn từ nghệ thuật.',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Công Nghệ Lõi Đứng Sau',
                content: 'Công cụ vẽ hình tân tiến nhất vừa được ghép nối trực tiếp vào giao diện Gemini Advanced. Imagen 3 có tỷ lệ chống dính khối và làm biến dạng vật thể thấp nhất vũ trụ AI gen ảnh.'
            },
            {
                type: 'deep-features',
                title: '🔥 Các Tính Năng Chuyên Sâu Tối Thượng',
                items: [
                    { name: 'Đổ Chữ Ký Tự (Typography) Sắc Nét', desc: 'Nhược điểm cố hữu của AI ảnh là vẽ chữ bị dị dạng (ngoằn ngoèo). Imagen 3 dọn dẹp vấn đề này. Bạn yêu cầu: Vẽ 1 chiếc ly cà phê có khắc dập nổi chữ "TreXanhSoft" - ảnh ra chính xác không sai 1 font.' },
                    { name: 'Ánh Sáng Nhiếp Ảnh Studio Chất Lượng Cao', desc: 'Nháy qua các concept máy cơ, Bokeh, Cinematic Lighting. Chất ảnh ra không bị "ảo ảo giả giả 3D" như nhiều tool đối thủ.' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Ứng Dụng Trong Dây Chuyền Marketer',
                content: 'Nếu là Graphic Designer solo, Imagen 3 xử đẹp phần vẽ Concept nháp cho KH xem trước khi bạn bắt tay làm chi tiết. Rất hợp để lấp đầy ảnh Mockup, thiết kế poster có chèn phông chữ trên background.'
            }
        ]
    },
    'project-idx': {
        heroTitle: 'Project IDX - Căn Cứ Code Phép Thuật',
        subtitle: 'Phiên bản Vscode trên mây (Cloud IDE) tẩm đẫm ma thuật AI Gemini, biến kỹ sư Solo thành người 3 đầu 6 tay.',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Kiến Trúc Hoạt Động',
                content: 'Được thiết lập dựa trên kiến trúc máy chủ Nix OS mạnh mẽ và nhân Code OSS của Microsoft. Nghĩa là thiết bị của bạn không cần RAM mạnh, mọi thứ (kể cả biên dịch) đều chạy server mây cực trâu của Google.'
            },
            {
                type: 'deep-features',
                title: '🔥 Các Tính Năng Chuyên Sâu Tối Thượng',
                items: [
                    { name: 'Gemini Code Partner', desc: 'Không phải copy code nhét sang màn hình Chat. Bấm Command+ I ngay trong khung làm việc, bôi đen code: "Explain luồng này cho tao, viết lại hàm tính toán này hiệu quả hơn" - Code thay đổi tại chỗ trực tiếp.' },
                    { name: 'Trình Giả Lập Mini Cắm Sẵn (Emulators)', desc: 'Xây dựng web xong, có luôn một màn giả lập iPad, iPhone, Android bật ngay khung bên hông để bạn coi thành quả App. Không mất công setup rườm rà Xcode.' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Quyền Lực Cho Thợ Gõ (Solo Coder)',
                content: 'Mọi cấu hình hệ sinh thái cực nặng nề (môi trường python, thư viện node_modules...) được loại bỏ. Đem cái Ipad ra quán cafe, bật mây lên là code nguyên cái Game và test chạy Live luôn không có độ trễ.'
            }
        ]
    },
    'ai-studio': {
        heroTitle: 'Google AI Studio - Lão Tổ Tu Luyện Prompt',
        subtitle: 'Nhà máy cung cấp API Key, là lớp "thô" nhất, nguyên bản trần trụi nhất của Gemini trước khi bị che mờ bởi trải nghiệm người dùng Web UI.',
        sections: [
            {
                type: 'tech-specs',
                title: '⚡ Công Nghệ Chuyên Môn',
                content: 'Kiểm soát trực diện các hạt nhân của Mô Hình (Temperature, Output Format JSON, Safety Guidelines). Bất kỳ ai muốn ứng dụng AI vào nền tảng của mình (ví dụ nhúng 1 tool vào WordPress) đều bắt đầu tại đây.'
            },
            {
                type: 'deep-features',
                title: '🔥 Các Tính Năng Chuyên Sâu Tối Thượng',
                items: [
                    { name: 'System Instructions Hardcore', desc: 'Đây là thứ Web Gemini không làm được. Bạn ép cỗ máy: Tao hỏi kiểu gì thì mày cũng CHỈ được trả lời dưới định dạng JSON với 3 trường { "tên": string, "tuổi": int, "đánh_giá": boolean }. Ép cấu trúc đỉnh cao.' },
                    { name: 'Zero-shot / Few-shot Tuning', desc: 'Upload sẵn một bộ hồ sơ dài vào để Dạy AI bằng phương thức "Tao sẽ hỏi thế này -> Mày hãy trả lời mẫu cụ thể giống hệt thế này".' }
                ]
            },
            {
                type: 'best-practices',
                title: '👑 Ứng Dụng Của Solo Automation',
                content: 'Dành cho việc tạo ra tài sản thụ động lâu dài (Automations). Kéo thả API liên kết với Zapier. Ví dụ: Thiết lập AI Studio tự đọc bất kỳ tin nhắn Facebook khách gửi đồ về mảng Xe cộ, sau đó tổng hợp, lọc giá xuất thẳng gửi vào Telegram cho bạn hàng giờ.'
            }
        ]
    }
};
