document.addEventListener('DOMContentLoaded', () => {

    // DOM Elements Mapping (Home Dashboard Specific)
    const filterBar = document.getElementById('filter-bar');
    const toolsGrid = document.getElementById('tools-grid');
    const pipelinesContainer = document.getElementById('pipelines-container');

    // 1. RENDER BỘ LỌC TÌM KIẾM
    if (filterBar) {
        const renderFilters = () => {
            const tags = getUniqueTags();
            filterBar.innerHTML = '';
            tags.forEach(tag => {
                const btn = document.createElement('button');
                btn.classList.add('filter-btn');

                btn.textContent = tag === 'All' ? '📌 Khám Phá' : '#' + tag.replace('_', ' ');
                if (tag === 'All') btn.classList.add('active');

                btn.dataset.filter = tag;

                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderToolsGrid(tag);
                });
                filterBar.appendChild(btn);
            });
        };

        const renderToolsGrid = (filterTag = 'All') => {
            if (!toolsGrid) return; // Bảo vệ trang chi tiết không bị lỗi DOM
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

                // MULTI-PAGE APPLICATION ROUTING (Chuyển Hướng)
                card.addEventListener('click', () => {
                    window.location.href = tool.id + ".html";
                });
                toolsGrid.appendChild(card);
            });
        };

        // KÍCH HOẠT MẶC ĐỊNH CHO TRANG CHỦ
        renderFilters();
        renderToolsGrid('All');
    }

    // 2. RENDER WORKFLOW PIPELINES
    if (pipelinesContainer) {
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

        renderPipelines();
    }
});
