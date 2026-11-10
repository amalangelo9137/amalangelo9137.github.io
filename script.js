/* Portfolio renderer. Content lives in data.js. */
let currentViewId = 'home-view';
let modalReturnFocus = null;

const portfolioProjects = Array.isArray(window.PORTFOLIO_DATA?.projects)
    ? window.PORTFOLIO_DATA.projects
    : [];

const viewKeys = {
    'home-view': 'home',
    'projects-view': 'projects',
    'media-view': 'media',
    'contact-view': 'contact',
    'windroid-view': 'windroid'
};

function updateNavigationState(viewId) {
    const activeView = viewId === 'windroid-view' ? 'projects-view' : viewId;
    document.querySelectorAll('.nav-links [data-view]').forEach(button => {
        if (button.dataset.view === activeView) {
            button.setAttribute('aria-current', 'page');
        } else {
            button.removeAttribute('aria-current');
        }
    });
}

function setMenuOpen(open) {
    const nav = document.getElementById('primary-navigation');
    const links = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (!nav || !links || !hamburger) return;

    const isMobile = window.matchMedia?.('(max-width: 768px)').matches ?? false;
    links.classList.toggle('nav-active', open && isMobile);
    hamburger.classList.toggle('toggle', open && isMobile);
    hamburger.setAttribute('aria-expanded', String(open && isMobile));
    hamburger.setAttribute('aria-label', open && isMobile ? 'Close navigation' : 'Open navigation');

    // The off-canvas links must not remain keyboard-focusable while hidden.
    links.inert = isMobile && !open;
    links.setAttribute('aria-hidden', String(isMobile && !open));
}

function updateViewUrl(viewId, replace = false) {
    const key = viewKeys[viewId];
    if (!key) return;

    const url = new URL(window.location.href);
    if (key === 'home') {
        url.searchParams.delete('view');
    } else {
        url.searchParams.set('view', key);
    }

    const method = replace ? 'replaceState' : 'pushState';
    window.history[method]({ viewId }, '', url);
}

function switchView(viewId, options = {}) {
    const target = document.getElementById(viewId);
    if (!target || !viewKeys[viewId]) return false;

    setMenuOpen(false);
    if (currentViewId === viewId) {
        updateNavigationState(viewId);
        if (options.updateHistory !== false) updateViewUrl(viewId);
        if (options.focus !== false) target.focus({ preventScroll: true });
        return false;
    }

    // Both visual themes now live in one stylesheet. Switching is a body
    // class change, so the background can crossfade without swapping CSS.
    document.body.classList.toggle('windroid-theme', viewId === 'windroid-view');

    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
        view.setAttribute('aria-hidden', 'true');
    });

    target.classList.add('active');
    target.removeAttribute('aria-hidden');
    currentViewId = viewId;

    updateNavigationState(viewId);
    if (options.updateHistory !== false) updateViewUrl(viewId);

    if (viewId === 'home-view') {
        const animImg = document.getElementById('synfig-animation');
        if (animImg && animImg.style.display !== 'none') {
            animImg.src = 'images/amal9137.webp?t=' + Date.now();
        }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (options.focus !== false) {
        target.focus({ preventScroll: true });
    }
    return true;
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
        if (project.theme !== 'twp' && project.id !== 'the-windroid-project') {
            card.setAttribute('aria-haspopup', 'dialog');
        }
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
        card.setAttribute('aria-haspopup', 'dialog');
        card.setAttribute('aria-label', 'Explore ' + subproject.title);

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
    const overlay = document.getElementById('project-overlay');
    const wasAlreadyOpen = overlay.classList.contains('active');
    if (!wasAlreadyOpen) {
        modalReturnFocus = document.activeElement;
    }

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
            // A part with a destination is one large link, not a dead card
            // containing a small clickable text link.
            const isPartLink = childKey === 'parts' && Boolean(child.link);
            const card = document.createElement(isPartLink ? 'a' : 'article');
            card.className = 'overlay-sub-card';
            if (isPartLink) {
                card.href = child.link;
                card.setAttribute('aria-label', 'Open ' + (child.title || 'project part'));
            }

            const title = document.createElement('h4');
            title.textContent = child.title || 'Untitled item';
            const description = document.createElement('p');
            description.textContent = child.description || '';
            card.append(title, description);

            if (childKey === 'subprojects' && Array.isArray(child.parts)) {
                card.tabIndex = 0;
                card.setAttribute('role', 'button');
                card.setAttribute('aria-haspopup', 'dialog');
                card.setAttribute('aria-label', 'View parts for ' + (child.title || 'this project'));
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
            } else if (isPartLink) {
                const action = document.createElement('span');
                action.className = 'project-card-action';
                action.textContent = 'Open part ↗';
                card.appendChild(action);
            }
            grid.appendChild(card);
        });
    }

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.inert = false;
    document.getElementById('main-content').inert = true;
    document.getElementById('main-content').setAttribute('aria-hidden', 'true');
    const toolbar = document.querySelector('.toolbar');
    if (toolbar) {
        toolbar.inert = true;
        toolbar.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.add('modal-open');

    if (wasAlreadyOpen) {
        document.getElementById('overlay-title').focus();
    } else {
        document.querySelector('.overlay-close-btn').focus();
    }
}

function closeOverlay() {
    const overlay = document.getElementById('project-overlay');
    if (!overlay.classList.contains('active')) return;

    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.inert = true;

    const main = document.getElementById('main-content');
    main.inert = false;
    main.removeAttribute('aria-hidden');
    const toolbar = document.querySelector('.toolbar');
    if (toolbar) {
        toolbar.inert = false;
        toolbar.removeAttribute('aria-hidden');
    }

    document.body.classList.remove('modal-open');
    if (modalReturnFocus?.isConnected) modalReturnFocus.focus();
    modalReturnFocus = null;
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
    const nav = document.getElementById('nav-links');
    const isOpen = nav?.classList.contains('nav-active') ?? false;
    setMenuOpen(!isOpen);
    if (!isOpen) {
        document.querySelector('#nav-links button')?.focus();
    }
}


function getOverlayFocusableElements(overlay) {
    return [...overlay.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    )].filter(element =>
        !element.closest('[inert]') &&
        !element.hasAttribute('hidden') &&
        element.getClientRects().length > 0
    );
}

function handleDocumentKeydown(event) {
    const overlay = document.getElementById('project-overlay');
    const overlayOpen = overlay?.classList.contains('active') ?? false;
    const nav = document.getElementById('nav-links');
    const menuOpen = nav?.classList.contains('nav-active') ?? false;

    if (event.key === 'Escape') {
        if (overlayOpen) {
            event.preventDefault();
            event.stopPropagation();
            closeOverlay();
            return;
        }
        if (menuOpen) {
            event.preventDefault();
            event.stopPropagation();
            setMenuOpen(false);
            document.querySelector('.hamburger')?.focus();
            return;
        }
    }

    if (menuOpen && event.key === 'Tab' &&
        (window.matchMedia?.('(max-width: 768px)').matches ?? false)) {
        const menuItems = [...nav.querySelectorAll('button:not([disabled])')]
            .filter(element => element.getClientRects().length > 0);
        if (menuItems.length) {
            const firstMenuItem = menuItems[0];
            const lastMenuItem = menuItems[menuItems.length - 1];
            if (event.shiftKey && document.activeElement === firstMenuItem) {
                event.preventDefault();
                lastMenuItem.focus();
                return;
            }
            if (!event.shiftKey && document.activeElement === lastMenuItem) {
                event.preventDefault();
                firstMenuItem.focus();
                return;
            }
            if (!nav.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? lastMenuItem : firstMenuItem).focus();
                return;
            }
        }
    }

    if (!overlayOpen || event.key !== 'Tab') return;

    const focusable = getOverlayFocusableElements(overlay);
    if (!focusable.length) {
        event.preventDefault();
        overlay.querySelector('.overlay-panel')?.focus();
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    const activeIndex = focusable.indexOf(active);

    if (activeIndex === -1) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
    }
}

function keepFocusInsideOverlay(event) {
    const overlay = document.getElementById('project-overlay');
    if (!overlay?.classList.contains('active')) return;
    if (overlay.contains(event.target)) return;
    overlay.querySelector('.overlay-close-btn')?.focus();
}

window.addEventListener('keydown', handleDocumentKeydown, true);
document.addEventListener('focusin', keepFocusInsideOverlay);


document.addEventListener('click', event => {
    const control = event.target.closest('[data-view]');
    if (!control) return;
    const viewId = control.dataset.view;
    if (!viewKeys[viewId]) return;
    event.preventDefault();
    switchView(viewId);
});

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderWindroidSubprojects();

    // The mobile drawer starts inert; desktop navigation remains available.
    setMenuOpen(false);
    window.addEventListener('resize', () => {
        const nav = document.getElementById('nav-links');
        const isOpen = nav?.classList.contains('nav-active') ?? false;
        setMenuOpen(isOpen);
    });

    const params = new URLSearchParams(window.location.search);
    const requestedView = Object.entries(viewKeys).find(([, key]) =>
        key === params.get('view')
    )?.[0];

    if (requestedView && requestedView !== currentViewId) {
        switchView(requestedView, { updateHistory: false, focus: false });
    } else {
        updateNavigationState(currentViewId);
    }

    window.addEventListener('popstate', () => {
        const key = new URLSearchParams(window.location.search).get('view');
        const viewId = Object.entries(viewKeys).find(([, value]) => value === key)?.[0]
            || 'home-view';
        switchView(viewId, { updateHistory: false });
    });
});
