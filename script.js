/* Portfolio renderer. Content lives in data.js. */
let currentViewId = 'home-view';
let modalReturnFocus = null;
let currentPart = null;

const portfolioParts = Array.isArray(window.PORTFOLIO_DATA?.parts)
    ? window.PORTFOLIO_DATA.parts
    : [];

const portfolioProjects = Array.isArray(window.PORTFOLIO_DATA?.projects)
    ? window.PORTFOLIO_DATA.projects
    : [];

const viewKeys = {
    'home-view': 'home',
    'projects-view': 'projects',
    'media-view': 'media',
    'contact-view': 'contact',
    'windroid-view': 'windroid',
    'part-view': 'part'
};

function getCanonicalPageUrl() {
    const url = new URL(window.location.href);
    const partId = url.searchParams.get('part');
    const projectId = url.searchParams.get('project');
    url.search = '';
    url.hash = '';
    if (partId) url.searchParams.set('part', partId);
    else if (projectId) url.searchParams.set('project', projectId);
    return url.href;
}

function setPageMetadata({ title, description, name, image }) {
    const cleanDescription = String(description || 'Explore games, software, operating-system projects, simulations and music by Amal9137.')
        .replace(/\\s+/g, ' ').trim().slice(0, 300);
    const pageTitle = title || 'Amal9137 | Game Developer & Creator';
    const canonicalUrl = getCanonicalPageUrl();

    document.title = pageTitle;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.content = cleanDescription;

    const setMeta = (selector, value) => {
        const element = document.querySelector(selector);
        if (element && value) element.setAttribute('content', value);
    };
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', cleanDescription);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', image || 'https://amalangelo9137.github.io/images/logo.png');

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = canonicalUrl;

    const structuredData = document.getElementById('page-structured-data');
    if (structuredData) {
        structuredData.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": name || pageTitle,
            "headline": pageTitle,
            "description": cleanDescription,
            "url": canonicalUrl,
            "isPartOf": {
                "@type": "WebSite",
                "name": "Amal9137",
                "url": "https://amalangelo9137.github.io/"
            },
            "mainEntity": {
                "@type": "CreativeWork",
                "name": name || pageTitle,
                "description": cleanDescription,
                "creator": { "@type": "Person", "name": "Amal9137" }
            }
        });
    }
}

function describePart(part) {
    if (part.seoDescription) return part.seoDescription;
    const firstContent = (Array.isArray(part.content) ? part.content : [])
        .find(block => block && (block.type === 'quote' || block.type === 'feature') && (block.text || block.title));
    const summary = firstContent?.text || firstContent?.title || '';
    return [part.subtitle, summary].filter(Boolean).join(' ').replace(/\\*\\*/g, '').replace(/\\*/g, '');
}

function updateNavigationState(viewId) {
    const activeView = (viewId === 'windroid-view' || viewId === 'part-view')
        ? 'projects-view'
        : viewId;
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
    url.searchParams.delete('part');
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

    // Restore the browser tab title whenever leaving a project-part page.
    const pageMetadata = {
        'home-view': {
            title: 'Amal9137 | Game Developer & Creator',
            description: "Explore Amal9137's games, software, operating-system projects, simulations, music and creative experiments."
        },
        'projects-view': {
            title: 'Projects | Amal9137',
            description: "Explore projects by Amal9137, including Windroid Sim, WinOS, games, software experiments and creative tools."
        },
        'media-view': {
            title: 'Music & Videos | Amal9137',
            description: "Watch project videos, visualizers and listen to original music by Amal9137."
        },
        'contact-view': {
            title: 'Contact | Amal9137',
            description: "Contact Amal9137 about software, game development, projects and collaborations."
        },
        'windroid-view': {
            title: 'The Windroid Project | Amal9137',
            description: "Explore The Windroid Project: an independent software and hardware ecosystem featuring Windroid Sim, WinOS and experimental tools."
        }
    };
    if (viewId !== 'part-view') {
        const metadata = pageMetadata[viewId] || pageMetadata['home-view'];
        setPageMetadata({ ...metadata, name: metadata.title });
    }

    setMenuOpen(false);
    // Keep the shared stylesheet's theme in sync, including part-to-part navigation.
    document.body.classList.toggle('windroid-theme',
        viewId === 'windroid-view' || (viewId === 'part-view' && currentPart?.theme === 'twp'));

    if (currentViewId === viewId) {
        updateNavigationState(viewId);
        if (options.updateHistory !== false) updateViewUrl(viewId);
        if (options.focus !== false) target.focus({ preventScroll: true });
        return false;
    }

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
        const card = document.createElement('a');
        card.className = 'card';
        card.href = '?project=' + encodeURIComponent(subproject.id);
        card.setAttribute('aria-label', 'Explore ' + subproject.title);

        card.addEventListener('click', event => {
            event.preventDefault();
            openSubproject(subproject);
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


function findSubproject(projectId) {
    for (const project of portfolioProjects) {
        const match = (project.subprojects || []).find(item => item.id === projectId);
        if (match) return match;
    }
    return null;
}

function openSubproject(subproject, options = {}) {
    if (!subproject) return false;

    if (options.updateHistory !== false) {
        const url = new URL(window.location.href);
        url.search = '';
        url.searchParams.set('project', subproject.id);
        window.history.pushState({ projectId: subproject.id }, '', url);
    }

    const root = portfolioProjects.find(project =>
        project.theme === 'twp' || project.id === 'the-windroid-project'
    );
    switchView('windroid-view', { updateHistory: false, focus: false });
    setPageMetadata({
        title: (subproject.title || 'Project') + ' | The Windroid Project | Amal9137',
        description: subproject.seoDescription || subproject.description || 'Explore this project by Amal9137.',
        name: subproject.title || 'Project',
        image: subproject.image ? new URL(subproject.image, window.location.href).href : undefined
    });
    openNode(subproject, 'parts', 'Parts');
    return true;
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
            const isPartLink = childKey === 'parts' && Boolean(child.partId || child.link);
            const card = document.createElement(isPartLink ? 'a' : 'article');
            card.className = 'overlay-sub-card';
            if (isPartLink) {
                card.href = child.partId ? '?part=' + encodeURIComponent(child.partId) : child.link;
                card.setAttribute('aria-label', 'Open ' + (child.title || 'project part'));
                if (child.partId) {
                    card.addEventListener('click', event => {
                        event.preventDefault();
                        closeOverlay();
                        openPart(child.partId);
                    });
                } else {
                    card.target = '_self';
                }
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

function safePartUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    const raw = value.trim();
    try {
        // When index.html is opened directly, resolve site-root paths from
        // the local website folder instead of the drive root.
        if (window.location.protocol === 'file:') {
            const localPath = raw.startsWith('/')
                ? raw.replace(/^\/+/, '')
                : raw;
            const url = new URL(localPath, window.location.href);
            return url.protocol === 'file:' ? url.href : null;
        }

        const url = new URL(raw, window.location.href);
        if (!['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)) return null;
        return raw;
    } catch {
        return null;
    }
}

function appendInlineContent(parent, runs) {
    const entries = Array.isArray(runs) ? runs : [{ type: 'text', text: String(runs ?? '') }];
    entries.forEach(run => {
        if (typeof run === 'string') {
            appendMarkdownText(parent, run);
            return;
        }
        if (!run || typeof run !== 'object') return;
        const value = String(run.value ?? run.text ?? run.label ?? '');
        const type = run.type || 'text';
        if (type === 'br') {
            parent.appendChild(document.createElement('br'));
            return;
        }
        if (type === 'link') {
            const href = safePartUrl(run.url || run.href);
            if (!href) {
                appendMarkdownText(parent, value);
                return;
            }
            const link = document.createElement('a');
            link.href = href;
            link.textContent = value || href;
            if (/^https?:\/\//i.test(href)) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
            parent.appendChild(link);
            return;
        }
        const tags = {
            text: null, strong: 'strong', bold: 'strong',
            em: 'em', italic: 'em', underline: 'u',
            code: 'code', mark: 'mark', del: 'del',
            sub: 'sub', sup: 'sup'
        };
        const tag = tags[type];
        if (!tag) {
            appendMarkdownText(parent, value);
            return;
        }
        const element = document.createElement(tag);
        element.textContent = value;
        parent.appendChild(element);
    });
}

function appendMarkdownText(parent, text) {
    const source = String(text ?? '');
    const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|~~[^~]+~~|==[^=]+==|`[^`]+`)/g;
    let cursor = 0;
    let match;
    while ((match = pattern.exec(source))) {
        if (match.index > cursor) {
            parent.appendChild(document.createTextNode(source.slice(cursor, match.index)));
        }
        const token = match[0];
        let tag = 'span';
        let value = token;
        if (token.startsWith('**')) { tag = 'strong'; value = token.slice(2, -2); }
        else if (token.startsWith('__')) { tag = 'u'; value = token.slice(2, -2); }
        else if (token.startsWith('*')) { tag = 'em'; value = token.slice(1, -1); }
        else if (token.startsWith('~~')) { tag = 'del'; value = token.slice(2, -2); }
        else if (token.startsWith('==')) { tag = 'mark'; value = token.slice(2, -2); }
        else if (token.startsWith('`')) { tag = 'code'; value = token.slice(1, -1); }
        const element = document.createElement(tag);
        element.textContent = value;
        parent.appendChild(element);
        cursor = pattern.lastIndex;
    }
    if (cursor < source.length) {
        parent.appendChild(document.createTextNode(source.slice(cursor)));
    }
}

function appendPartContent(container, block) {
    if (!block || typeof block !== 'object') return;

    if (block.type === 'text') {
        const paragraph = document.createElement('p');
        paragraph.className = 'part-text';
        if (Array.isArray(block.runs)) appendInlineContent(paragraph, block.runs);
        else paragraph.textContent = block.text || '';
        container.appendChild(paragraph);
        return;
    }

    if (block.type === 'heading') {
        const level = Math.min(4, Math.max(2, Number(block.level) || 3));
        const heading = document.createElement('h' + level);
        heading.className = 'part-section-heading';
        if (Array.isArray(block.runs)) appendInlineContent(heading, block.runs);
        else heading.textContent = block.text || '';
        container.appendChild(heading);
        return;
    }

    if (block.type === 'quote') {
        const quote = document.createElement('blockquote');
        quote.className = 'part-quote';
        const paragraph = document.createElement('p');
        if (Array.isArray(block.runs)) appendInlineContent(paragraph, block.runs);
        else paragraph.textContent = block.text || '';
        quote.appendChild(paragraph);
        if (block.attribution) {
            const cite = document.createElement('cite');
            cite.textContent = block.attribution;
            quote.appendChild(cite);
        }
        container.appendChild(quote);
        return;
    }

    if (block.type === 'callout') {
        const callout = document.createElement('aside');
        callout.className = 'part-callout' + (block.variant ? ' part-callout-' + String(block.variant).replace(/[^a-z0-9_-]/gi, '') : '');
        if (block.title) {
            const heading = document.createElement('h4');
            appendMarkdownText(heading, block.title);
            callout.appendChild(heading);
        }
        const paragraph = document.createElement('p');
        if (Array.isArray(block.runs)) appendInlineContent(paragraph, block.runs);
        else appendMarkdownText(paragraph, block.text || '');
        callout.appendChild(paragraph);
        container.appendChild(callout);
        return;
    }

    if (block.type === 'divider') {
        const divider = document.createElement('hr');
        divider.className = 'part-divider';
        container.appendChild(divider);
        return;
    }

    if (block.type === 'code') {
        const pre = document.createElement('pre');
        pre.className = 'part-code';
        const code = document.createElement('code');
        if (block.language) code.dataset.language = String(block.language);
        code.textContent = block.code || block.text || '';
        pre.appendChild(code);
        container.appendChild(pre);
        return;
    }

    if (block.type === 'link') {
        const href = safePartUrl(block.url || block.href);
        if (!href) return;
        const link = document.createElement('a');
        link.className = 'part-inline-link';
        link.href = href;
        link.textContent = block.label || block.text || href;
        if (/^https?:\/\//i.test(href)) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
        container.appendChild(link);
        return;
    }

    if (block.type === 'feature') {
        const feature = document.createElement('section');
        const featureIndex = container.querySelectorAll(':scope > .part-feature').length;
        feature.className = 'part-feature' + (featureIndex % 2 ? ' part-feature-reverse' : '');

        const mediaData = block.media || {};
        const mediaType = mediaData.type || 'image';
        const src = safePartUrl(mediaData.src);
        if (src && ['image', 'video', 'embed'].includes(mediaType)) {
            const figure = document.createElement('figure');
            figure.className = 'part-media part-feature-media';
            let media;
            if (mediaType === 'image') {
                media = document.createElement('img');
                media.src = src;
                media.alt = mediaData.alt || '';
                media.loading = 'lazy';
                media.onerror = () => figure.remove();
            } else if (mediaType === 'video') {
                media = document.createElement('video');
                media.src = src;
                media.controls = mediaData.controls !== false;
                media.playsInline = true;
                media.preload = 'metadata';
                if (mediaData.poster) media.poster = mediaData.poster;
                if (mediaData.autoplay) media.autoplay = true;
                if (mediaData.muted || mediaData.autoplay) media.muted = true;
                if (mediaData.loop) media.loop = true;
            } else {
                media = document.createElement('iframe');
                media.src = src;
                media.title = mediaData.title || 'Embedded media';
                media.loading = 'lazy';
                media.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share';
                media.allowFullscreen = true;
                media.referrerPolicy = 'strict-origin-when-cross-origin';
            }
            figure.appendChild(media);
            if (mediaData.caption) {
                const caption = document.createElement('figcaption');
                caption.textContent = mediaData.caption;
                figure.appendChild(caption);
            }
            feature.appendChild(figure);
        }

        const copy = document.createElement('div');
        copy.className = 'part-feature-copy';
        if (block.title) {
            const heading = document.createElement('h2');
            heading.className = 'part-section-heading';
            appendMarkdownText(heading, block.title);
            copy.appendChild(heading);
        }
        if (Array.isArray(block.runs)) {
            const paragraph = document.createElement('p');
            paragraph.className = 'part-text';
            appendInlineContent(paragraph, block.runs);
            copy.appendChild(paragraph);
        } else if (block.text) {
            const paragraph = document.createElement('p');
            paragraph.className = 'part-text';
            appendMarkdownText(paragraph, block.text);
            copy.appendChild(paragraph);
        }
        if (Array.isArray(block.content)) {
            block.content.forEach(child => appendPartContent(copy, child));
        }
        feature.appendChild(copy);
        container.appendChild(feature);
        return;
    }

    if (block.type === 'image') {
        const src = safePartUrl(block.src);
        if (!src) return;
        const figure = document.createElement('figure');
        figure.className = 'part-media';
        const image = document.createElement('img');
        image.src = src;
        image.alt = block.alt || '';
        image.loading = 'lazy';
        image.onerror = () => figure.remove();
        figure.appendChild(image);
        if (block.caption) {
            const caption = document.createElement('figcaption');
            caption.textContent = block.caption;
            figure.appendChild(caption);
        }
        container.appendChild(figure);
        return;
    }

    if (block.type === 'video' || block.type === 'embed') {
        const src = safePartUrl(block.src);
        if (!src) return;
        const figure = document.createElement('figure');
        figure.className = 'part-media part-video';
        const frame = document.createElement(block.type === 'video' ? 'video' : 'iframe');
        frame.src = src;
        if (block.type === 'video') {
            frame.controls = true;
            frame.playsInline = true;
            frame.preload = 'metadata';
        } else {
            frame.title = block.title || 'Embedded video';
            frame.loading = 'lazy';
            frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            frame.allowFullscreen = true;
            frame.referrerPolicy = 'strict-origin-when-cross-origin';
        }
        figure.appendChild(frame);
        if (block.caption) {
            const caption = document.createElement('figcaption');
            caption.textContent = block.caption;
            figure.appendChild(caption);
        }
        container.appendChild(figure);
        return;
    }

    if ((block.type === 'list' || block.type === 'ordered-list') && Array.isArray(block.items)) {
        const list = document.createElement(block.type === 'ordered-list' ? 'ol' : 'ul');
        list.className = 'part-list';
        block.items.forEach(item => {
            const li = document.createElement('li');
            if (Array.isArray(item)) appendInlineContent(li, item);
            else if (item && typeof item === 'object' && Array.isArray(item.runs)) appendInlineContent(li, item.runs);
            else li.textContent = typeof item === 'string' ? item : String(item?.text || '');
            list.appendChild(li);
        });
        container.appendChild(list);
    }
}

function renderPart(part) {
    const title = document.getElementById('part-title');
    const subtitle = document.getElementById('part-subtitle');
    const content = document.getElementById('part-content');
    const actions = document.getElementById('part-actions');
    if (!title || !subtitle || !content || !actions) return;

    setPageMetadata({
        title: (part.title || 'Project part') + ' | Amal9137',
        description: describePart(part),
        name: part.title || 'Project part'
    });
    title.textContent = part.title || 'Project part';
    subtitle.textContent = part.subtitle || '';
    content.replaceChildren();
    actions.replaceChildren();

    (Array.isArray(part.content) ? part.content : [])
        .forEach(block => appendPartContent(content, block));

    const links = [];
    if (part.downloadUrl) links.push({ label: 'Download', url: part.downloadUrl });
    if (Array.isArray(part.downloadLinks)) links.push(...part.downloadLinks);
    if (part.repoUrl) links.push({ label: 'Go to repository', url: part.repoUrl });

    links.forEach(link => {
        if (!link?.url) return;
        const anchor = document.createElement('a');
        anchor.className = 'part-action-button';
        anchor.href = link.url;
        anchor.textContent = link.label || 'Open link';
        if (/^https?:\/\//i.test(link.url)) {
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
        }
        actions.appendChild(anchor);
    });
}

function openPart(partId, options = {}) {
    const part = portfolioParts.find(item => item.id === partId);
    if (!part) return false;

    if (options.updateHistory !== false) {
        const url = new URL(window.location.href);
        url.search = '';
        url.searchParams.set('part', part.id);
        window.history.pushState({ partId: part.id }, '', url);
    }

    currentPart = part;
    renderPart(part);
    switchView('part-view', { updateHistory: false, focus: options.focus !== false });
    return true;
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

    const url = new URL(window.location.href);
    if (url.searchParams.has('project')) {
        url.search = '';
        url.searchParams.set('view', 'windroid');
        window.history.replaceState({ viewId: 'windroid-view' }, '', url);
        setPageMetadata({
            title: 'The Windroid Project | Amal9137',
            description: 'Explore The Windroid Project: an independent software and hardware ecosystem featuring Windroid Sim, WinOS and experimental tools.',
            name: 'The Windroid Project'
        });
    }
}

function closeOverlayOnOutsideClick(event) {
    if (event.target === document.getElementById('project-overlay')) {
        closeOverlay();
    }
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
    const requestedPart = params.get('part');
    const requestedProject = params.get('project');
    const requestedView = Object.entries(viewKeys).find(([id, key]) =>
        id !== 'part-view' && key === params.get('view')
    )?.[0];

    if (requestedPart && openPart(requestedPart, { updateHistory: false, focus: false })) {
        // Direct project-part URL.
    } else if (requestedProject && findSubproject(requestedProject)) {
        openSubproject(findSubproject(requestedProject), { updateHistory: false });
    } else if (requestedView && requestedView !== currentViewId) {
        switchView(requestedView, { updateHistory: false, focus: false });
    } else {
        updateNavigationState(currentViewId);
        setPageMetadata({
            title: 'Amal9137 | Game Developer & Creator',
            description: "Explore Amal9137's games, software, operating-system projects, simulations, music and creative experiments.",
            name: 'Amal9137'
        });
    }

    window.addEventListener('popstate', () => {
        const stateParams = new URLSearchParams(window.location.search);
        const partId = stateParams.get('part');
        const projectId = stateParams.get('project');

        if (partId && openPart(partId, { updateHistory: false })) return;
        if (projectId && findSubproject(projectId)) {
            if (document.getElementById('project-overlay')?.classList.contains('active')) {
                closeOverlay();
            }
            openSubproject(findSubproject(projectId), { updateHistory: false });
            return;
        }

        if (document.getElementById('project-overlay')?.classList.contains('active')) {
            closeOverlay();
        }
        currentPart = null;
        const key = stateParams.get('view');
        const viewId = Object.entries(viewKeys).find(([id, value]) =>
            id !== 'part-view' && value === key
        )?.[0] || 'home-view';
        switchView(viewId, { updateHistory: false });
    });
});
