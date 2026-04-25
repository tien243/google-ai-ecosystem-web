document.addEventListener('DOMContentLoaded', () => {

    // DOM Elements Mapping
    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('detail-view');
    const filterBar = document.getElementById('filter-bar');
    const toolsGrid = document.getElementById('tools-grid');
    const pipelinesContainer = document.getElementById('pipelines-container');
    const backBtn = document.getElementById('back-btn');
    const detailContentArea = document.getElementById('detail-content-area');

    // 1. RENDER BỘ LỌC TÌM KIẾM
    const renderFilters = () => {
        const tags = getUniqueTags();
        filterBar.innerHTML = '';
        tags.forEach(tag => {
            const btn = document.createElement('button');
            btn.classList.add('filter-btn');

            if (tag === 'All') {
                btn.classList.add('active');
                btn.textContent = 'Khám Phá Tất Bật Cả';
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

    // 2. RENDER GRID CÔNG CỤ (TRANG CHỦ)
    const renderToolsGrid = (filterTag = 'All') => {
        toolsGrid.innerHTML = '';
        const filteredTools = toolsData.filter(tool => tool.tags.includes(filterTag));

        filteredTools.forEach((tool, index) => {
            const card = document.createElement('div');
            card.className = 'tool-card glass';
            card.style.animationDelay = `${index * 0.1}s`;

            const tagsHtml = tool.tags.filter(t => t !== 'All').map(t => `<span class="tag">#${t.replace('_', ' ')}</span>`).join('');
            card.innerHTML = `
                <div class="tool-icon">${tool.icon}</div>
                <h3 class="tool-title">${tool.name}</h3>
                <p class="tool-desc">${tool.description}</p>
                <div class="tool-tags">${tagsHtml}</div>
            `;

            // SPA Event: Click để nhảy sang trang chi tiết
            card.addEventListener('click', () => {
                openDetailPage(tool.id, tool.icon);
            });
            toolsGrid.appendChild(card);
        });
    };

    // 3. RENDER WORKFLOW PIPELINES
    const renderPipelines = () => {
        pipelinesContainer.innerHTML = '';
        workflowsData.forEach(pipeline => {
            const pCard = document.createElement('div');
            pCard.className = 'pipeline-card glass';
            let stepsHtml = pipeline.steps.map(s => `
                <div class="step-item">
                    <div class="step-number">${s.step}</div>
                    <div class="step-content">
                        <div class="step-tool">${s.tool}</div>
                        <div class="step-desc">${s.description}</div>
                    </div>
                </div>
            `).join('');

            pCard.innerHTML = `
                <div class="pipeline-header">
                    <h3 class="pipeline-title">${pipeline.title}</h3>
                    <div class="pipeline-role">${pipeline.role}</div>
                </div>
                <div class="steps-container">${stepsHtml}</div>
            `;
            pipelinesContainer.appendChild(pCard);
        });
    };

    // 4. MỞ TRANG CHI TIẾT (SPA ROUTING LOGIC)
    const openDetailPage = (toolId, toolIcon) => {
        const fullData = toolsDetailData[toolId];

        if (!fullData) {
            alert('Quá trình Research chuyên môn cho tool này đang được Google thu thập. Vui lòng thử lại sau!');
            return;
        }

        // Tạo cấu trúc từng Section
        let sectionsHtml = fullData.sections.map(sec => {
            let innerHtml = sec.content ? `<p>${sec.content}</p>` : '';
            if (sec.items) {
                innerHtml += `<ul>` + sec.items.map(item => `<li><strong>${item.name}</strong> <br/> ${item.desc}</li>`).join('') + `</ul>`;
            }
            return `
                <div class="deep-section glass">
                    <h2>${sec.title}</h2>
                    <div class="deep-body">${innerHtml}</div>
                </div>
            `;
        }).join('');

        // Đổ Data vào vùng chứa Render
        detailContentArea.innerHTML = `
            <div class="detail-hero">
                <div class="hero-icon">${toolIcon}</div>
                <h1 class="hero-title">${fullData.heroTitle}</h1>
                <p class="hero-subtitle">${fullData.subtitle}</p>
            </div>
            <div class="detail-sections-grid">
                ${sectionsHtml}
            </div>
        `;

        // Animation Chuyển Cảnh
        homeView.classList.add('hidden');
        detailView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 5. NÚT BACK VỀ TRANG CHỦ
    backBtn.addEventListener('click', () => {
        detailView.classList.add('hidden');
        homeView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // INIT MẶC ĐỊNH KHI LOAD TRANG
    renderFilters();
    renderToolsGrid('All');
    renderPipelines();
});
