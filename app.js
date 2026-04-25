document.addEventListener('DOMContentLoaded', () => {

    const filterBar = document.getElementById('filter-bar');
    const toolsGrid = document.getElementById('tools-grid');
    const pipelinesContainer = document.getElementById('pipelines-container');

    // MODAL LOGIC DOM
    const modalOverlay = document.getElementById('tool-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');

    // 1. RENDER BỘ LỌC (FILTER BAR)
    const renderFilters = () => {
        const tags = getUniqueTags();
        filterBar.innerHTML = '';
        tags.forEach(tag => {
            const btn = document.createElement('button');
            btn.classList.add('filter-btn');

            if (tag === 'All') {
                btn.classList.add('active');
                btn.textContent = 'Trải nghiệm Tất cả';
            } else {
                btn.textContent = '#' + tag.replace('_', ' ');
            }

            btn.dataset.filter = tag;

            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderToolsGrid(tag);
            });
            filterBar.appendChild(btn);
        });
    };

    // 2. RENDER CARD CÔNG CỤ (GRID)
    const renderToolsGrid = (filterTag = 'All') => {
        toolsGrid.innerHTML = '';
        const filteredTools = toolsData.filter(tool => tool.tags.includes(filterTag));

        filteredTools.forEach((tool, index) => {
            const delay = index * 0.1;

            const card = document.createElement('div');
            card.className = 'tool-card glass';
            card.style.animationDelay = `${delay}s`;

            const tagsHtml = tool.tags
                .filter(t => t !== 'All')
                .map(t => `<span class="tag">#${t.replace('_', ' ')}</span>`)
                .join('');

            card.innerHTML = `
                <div class="tool-icon">${tool.icon}</div>
                <h3 class="tool-title">${tool.name}</h3>
                <p class="tool-desc">${tool.description}</p>
                <div class="tool-tags">
                    ${tagsHtml}
                </div>
            `;

            // Bắt sự kiện Click Card mở Modal chi tiết
            card.addEventListener('click', () => {
                openToolModal(tool);
            });

            toolsGrid.appendChild(card);
        });
    };

    // 3. RENDER CÁC LUỒNG PIPELINES
    const renderPipelines = () => {
        pipelinesContainer.innerHTML = '';
        workflowsData.forEach(pipeline => {
            const pCard = document.createElement('div');
            pCard.className = 'pipeline-card glass';

            let stepsHtml = '';
            pipeline.steps.forEach(s => {
                stepsHtml += `
                    <div class="step-item">
                        <div class="step-number">${s.step}</div>
                        <div class="step-content">
                            <div class="step-tool">${s.tool}</div>
                            <div class="step-desc">${s.description}</div>
                        </div>
                    </div>
                `;
            });

            pCard.innerHTML = `
                <div class="pipeline-header">
                    <h3 class="pipeline-title">${pipeline.title}</h3>
                    <div class="pipeline-role">${pipeline.role}</div>
                </div>
                <div class="steps-container">
                    ${stepsHtml}
                </div>
            `;
            pipelinesContainer.appendChild(pCard);
        });
    };

    // 4. LOGIC MỞ MODAL CHI TIẾT
    const openToolModal = (tool) => {
        let featuresHtml = tool.features ? tool.features.map(f => `<li>${f}</li>`).join('') : '';
        let appHtml = tool.application || 'Đang cập nhật...';

        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="modal-icon">${tool.icon}</div>
                <h3 class="modal-title">${tool.name}</h3>
            </div>
            <div class="modal-section">
                <h4>✨ Tính Năng Nổi Bật</h4>
                <ul>
                    ${featuresHtml}
                </ul>
            </div>
            <div class="modal-section" style="margin-top: 1.5rem;">
                <h4>🎯 Khả Năng Ứng Dụng Hàng Ngày (Solo Worker)</h4>
                <p>${appHtml}</p>
            </div>
        `;

        // Kích hoạt trượt hiển thị modal
        modalOverlay.classList.remove('hidden');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi mở modal
    };

    // Đóng Modal (Click Nút Close)
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Mở khóa cuộn trang
    });

    // Đóng Modal (Click khoảng Overlay tối bên ngoài)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // INIT ALL SECTIONS
    renderFilters();
    renderToolsGrid('All');
    renderPipelines();
});
