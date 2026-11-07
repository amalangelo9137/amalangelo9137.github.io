/* Portfolio renderer. Content lives in data.js. */
let currentViewId = 'home-view';
const portfolioProjects = Array.isArray(window.PORTFOLIO_DATA?.projects)
    ? window.PORTFOLIO_DATA.projects
    : [];

function switchView(viewId) {
    document.querySelector('.nav-links')?.classList.remove('nav-active');
    document.querySelector('.hamburger')?.classList.remove('toggle');
    if (currentViewId === viewId) return;

    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (!target) return;

    target.classList.add('active');
    currentViewId = viewId;

    // Keep the main portfolio and The Windroid Project on independent stylesheets.
    const isWindroid = viewId === 'windroid-view';
    document.getElementById('main-theme').disabled = isWindroid;
    document.getElementById('twp-theme').disabled = !isWindroid;

    if (viewId === 'home-view') {
        const animImg = document.getElementById('synfig-animation');
        if (animImg && animImg.style.display !== 'none') {
            animImg.src = 'images/amal9137.webp?t=' + Date.now();
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createProjectImage(src, title, className) {
    const wrapper = document.createElement('div');
    wrapper.className = className;
    if (!src) return wrapper;

    const image = document.createElement('img');
    image.src = src;
    image.alt = (title || 'Project') + ' artwork';
    image.loading = 'lazy';
    image.onerror = () => image.remove();
    wrapper.appendChild(image);
    return wrapper;
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const count = document.getElementById('projects-count');
    if (!grid) return;

    grid.replaceChildren();
    if (count) {
        count.textContent = portfolioProjects.length +
            (portfolioProjects.length === 1 ? ' project' : ' projects');
    }

    portfolioProjects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'card project-featured-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Explore ' + project.title);

        const open = () => openProject(project);
        card.addEventListener('click', open);
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                open();
            }
        });

        const thumb = createProjectImage(
            project.image, project.title,
            'card-thumbnail project-featured-thumbnail'
        );
        const label = document.createElement('span');
        label.className = 'project-image-label';
        label.textContent = project.category || 'PROJECT';
        thumb.appendChild(label);

        const body = document.createElement('div');
        body.className = 'card-body project-featured-body';
        const meta = document.createElement('div');
        meta.className = 'project-meta';
        const type = document.createElement('span');
        type.className = 'project-type';
        type.textContent = (project.tags || []).join(' · ') ||
            project.category || 'PROJECT';
        meta.appendChild(type);

        if (project.status) {
            const status = document.createElement('span');
            status.className = 'project-status';
            status.textContent = project.status;
            meta.appendChild(status);
        }

        const title = document.createElement('h3');
        title.textContent = project.title || 'Untitled project';
        const description = document.createElement('p');
        description.textContent = project.description || '';
        const action = document.createElement('span');
        action.className = 'project-card-action';
        action.textContent = 'Explore the project ↗';

        body.append(meta, title, description, action);
        card.append(thumb, body);
        grid.appendChild(card);
    });
}

function renderWindroidSubprojects() {
    const grid = document.getElementById('windroid-subprojects-grid');
    const rootProject = portfolioProjects.find(project =>
        project.theme === 'twp' || project.id === 'the-windroid-project'
    );
    if (!grid) return;

    grid.replaceChildren();
    (rootProject?.subprojects || []).forEach(subproject => {
        const card = document.createElement('article');
        card.className = 'card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');

        const open = () => openNode(subproject, 'parts', 'Parts');
        card.addEventListener('click', open);
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                open();
            }
        });

        const thumb = createProjectImage(
            subproject.image, subproject.title, 'card-thumbnail'
        );
        const body = document.createElement('div');
        body.className = 'card-body';
        const title = document.createElement('h3');
        title.textContent = subproject.title || 'Untitled sub-project';
        const description = document.createElement('p');
        description.textContent = subproject.description || '';
        body.append(title, description);

        if (subproject.status) {
            const status = document.createElement('span');
            status.className = 'project-status';
            status.textContent = subproject.status;
            body.appendChild(status);
        }

        card.append(thumb, body);
        grid.appendChild(card);
    });
}

function openProject(project) {
    if (project.theme === 'twp' || project.id === 'the-windroid-project') {
        switchView('windroid-view');
    } else {
        openNode(project, 'subprojects', 'Sub-projects');
    }
}

function openNode(node, childKey, heading) {
    document.getElementById('overlay-title').textContent =
        node.title || 'Project';
    document.getElementById('overlay-subtitle').textContent =
        node.status || '';
    document.getElementById('overlay-desc').textContent =
        node.description || '';
    document.getElementById('overlay-items-heading').textContent = heading;

    const grid = document.getElementById('overlay-parts-grid');
    grid.replaceChildren();
    const children = Array.isArray(node[childKey]) ? node[childKey] : [];

    if (!children.length) {
        const empty = document.createElement('p');
        empty.className = 'empty-overlay-msg';
        empty.textContent = node.emptyMessage ||
            'Nothing has been added here yet.';
        grid.appendChild(empty);
    } else {
        children.forEach(child => {
            const card = document.createElement('article');
            card.className = 'overlay-sub-card';
            const title = document.createElement('h4');
            title.textContent = child.title || 'Untitled item';
            const description = document.createElement('p');
            description.textContent = child.description || '';
            card.append(title, description);

            if (childKey === 'subprojects' && Array.isArray(child.parts)) {
                card.tabIndex = 0;
                card.setAttribute('role', 'button');
                const action = document.createElement('span');
                action.className = 'project-card-action';
                action.textContent = 'View parts ↗';
                card.appendChild(action);

                const open = () => openNode(child, 'parts', 'Parts');
                card.addEventListener('click', open);
                card.addEventListener('keydown', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        open();
                    }
                });
            } else if (child.link) {
                const link = document.createElement('a');
                link.href = child.link;
                link.textContent = 'Explore part ↗';
                card.appendChild(link);
            }
            grid.appendChild(card);
        });
    }

    document.getElementById('project-overlay').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeOverlay() {
    document.getElementById('project-overlay').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function closeOverlayOnOutsideClick(event) {
    if (event.target === document.getElementById('project-overlay')) {
        closeOverlay();
    }
}

function showHomeFallback() {
    const image = document.getElementById('synfig-animation');
    const fallback = document.getElementById('fallback-h1');
    if (image) image.style.display = 'none';
    if (fallback) fallback.style.display = 'block';
}

function toggleMenu() {
    document.querySelector('.nav-links')?.classList.toggle('nav-active');
    document.querySelector('.hamburger')?.classList.toggle('toggle');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderWindroidSubprojects();

    const params = new URLSearchParams(window.location.search);
    const views = {
        projects: 'projects-view',
        media: 'media-view',
        contact: 'contact-view',
        home: 'home-view',
        windroid: 'windroid-view'
    };
    if (views[params.get('view')]) {
        switchView(views[params.get('view')]);
    }
});
