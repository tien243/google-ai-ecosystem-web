document.addEventListener('DOMContentLoaded', () => {

    const filterBar = document.getElementById('filter-bar');
    const toolsGrid = document.getElementById('tools-grid');
    const pipelinesContainer = document.getElementById('pipelines-container');

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
                // Remove active classes
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                // Add active to current
                btn.classList.add('active');
                // Re-render
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
            // Hiệu ứng Fade In Cascading
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
            toolsGrid.appendChild(card);
        });
    };

    // 3. RENDER CÁC LUỒNG PIPELINES HƯỚNG DẪN DƯỚI DẠNG CARD LAYER
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

    // INIT ALL SECTIONS
    renderFilters();
    renderToolsGrid('All');
    renderPipelines();
});
