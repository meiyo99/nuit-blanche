document.addEventListener('DOMContentLoaded', () => {
    const exhibits = [
        {
            id: 'exhibit-1',
            title: 'Riparia',
            artist: 'Emilija Škarnulytė',
            description: 'A stunning large-scale projection installation...',
            location: { lat: 43.6396, lng: -79.3980 },
            venue: 'Canada Malting Silos',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'projection',
            artLocation: 'waterfront',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-1.jpg',
            //descriptionImages: ['images/events/exhibit-1-detail-1.jpg', 'images/events/exhibit-1-detail-2.jpg']
        },
        {
            id: 'exhibit-2',
            title: 'Snail Work, Or Give the Colours What Turns You Please',
            artist: 'Shannon Garden-Smith',
            description: 'A beautiful interactive installation...',
            location: { lat: 43.6429, lng: -79.3674 },
            venue: 'Retail space on Queens Quay East',
            date: 'October 5, 2024',
            time: '7:00 PM - 7:00 AM',
            projectType: 'interactive',
            artLocation: 'waterfront',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-2.png'
        },
        {
            id: 'exhibit-3',
            title: 'Coalescing Towards',
            artist: 'Michele Rizzo',
            description: 'A 12-hour contemporary dance performance...',
            location: { lat: 43.6515, lng: -79.3835 },
            venue: 'STRUT, Perth Moves',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'performance',
            artLocation: 'downtown',
            accessibility: 'audio-description',
            image: 'images/events/exhibit-3.png',
            descriptionImages: ['images/events/exhibit-1-detail-1.png', 'images/events/exhibit-1-detail-2.png']
        },
        {
            id: 'exhibit-4',
            title: 'Your Wish is Your Command',
            artist: 'Divya Mehra',
            description: 'A colossal inflatable magic lamp...',
            location: { lat: 43.6479, lng: -79.3808 },
            venue: 'TD Centre Courtyard',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'financial-district',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-4.png'
        },
        {
            id: 'exhibit-5',
            title: 'A Practical Guide',
            artist: 'Divya Mehra',
            description: 'An enormous inflatable plastic bag...',
            location: { lat: 43.6471, lng: -79.3801 },
            venue: '390 Bay Street',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'financial-district',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-5.png'
        },
        {
            id: 'exhibit-6',
            title: 'Wellspring',
            artist: 'Jenine Marsh',
            description: 'An ambitious architectural intervention...',
            location: { lat: 43.6527, lng: -79.3835 },
            venue: 'Nathan Phillips Square',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'downtown',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-6.png'
        },
        {
            id: 'exhibit-7',
            title: 'Eclipse',
            artist: 'Naomi Rincón Gallardo',
            description: 'A film about the climate apocalypse...',
            location: { lat: 43.6534, lng: -79.3839 },
            venue: '100 Queen Street West',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'downtown',
            accessibility: 'low-sensory',
            image: 'images/events/exhibit-7.png'
        },
        {
            id: 'exhibit-8',
            title: 'Namahisvarri',
            artist: 'Carola Grahn',
            description: 'A 10-metre-high inflatable mountain...',
            location: { lat: 43.7676, lng: -79.4135 },
            venue: 'Mel Lastman Square',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-8.png'
        },
        {
            id: 'exhibit-9',
            title: 'Skin Deep',
            artist: 'Chun Hua Catherine Dong',
            description: 'A photography installation exposing...',
            location: { lat: 43.7680, lng: -79.4128 },
            venue: '5120 Yonge Street',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'audio-description',
            image: 'images/events/exhibit-9.png'
        },
        {
            id: 'exhibit-10',
            title: 'Mountain of Dreams',
            artist: 'Indigenous Art Collective',
            description: 'A massive inflatable mountain installation...',
            location: { lat: 43.7673, lng: -79.4142 },
            venue: 'Mel Lastman Square North',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-10.png'
        },
        {
            id: 'exhibit-11',
            title: 'Suburban Constellations',
            artist: 'Maya Chen',
            description: 'Hundreds of LED lights suspended...',
            location: { lat: 43.7685, lng: -79.4155 },
            venue: 'North York Civic Centre Plaza',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'wheelchair-accessible',
            image: 'images/events/exhibit-11.png'
        },
    ];

    let filteredExhibits = [...exhibits];

    function createEventCard(exhibit, index) {
        const card = document.createElement('div');
        card.className = 'event-card-grid';
        card.dataset.id = exhibit.id;
        
        card.innerHTML = `
            <div class="event-card-image">
                <img src="${exhibit.image || 'images/events/placeholder.jpg'}" alt="${exhibit.title}" style="width: 100%; height: 100%; object-fit: cover;" onload="console.log('Image loaded: ${exhibit.image}')" onerror="console.error('Image failed to load: ${exhibit.image}')">
                <div class="event-number">${String(index + 1).padStart(2, '0')}</div>
            </div>
            <div class="event-card-content">
                <h3 class="event-card-title">${exhibit.title}</h3>
                <p class="event-card-artist">${exhibit.artist}</p>
                <p class="event-card-location">${exhibit.venue}</p>
            </div>
        `;

        return card;
    }

    function renderEventCards(exhibitsToRender = exhibits) {
        const eventsGrid = document.getElementById('events-grid');
        eventsGrid.innerHTML = '';

        if (exhibitsToRender.length === 0) {
            eventsGrid.innerHTML = '<div class="no-results">No events found matching your criteria.</div>';
            return;
        }

        exhibitsToRender.forEach((exhibit, index) => {
            const card = createEventCard(exhibit, index);
            card.addEventListener('click', function() {
                if (exhibit.id === 'exhibit-1') {
                    window.location.href = 'event-description.html';
                } else {
                    window.location.href = 'event-description.html';
                }
            });
            eventsGrid.appendChild(card);
        });
    }

    function setupFilters() {
        const searchInput = document.getElementById('events-search');
        const projectTypeFilter = document.getElementById('project-type-filter');
        const artLocationFilter = document.getElementById('art-location-filter');
        const accessibilityFilter = document.getElementById('accessibility-filter');

        function applyFilters() {
            let filtered = [...exhibits];

            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                filtered = filtered.filter(exhibit => 
                    exhibit.title.toLowerCase().includes(searchTerm) ||
                    exhibit.artist.toLowerCase().includes(searchTerm) ||
                    exhibit.description.toLowerCase().includes(searchTerm) ||
                    exhibit.venue.toLowerCase().includes(searchTerm) ||
                    exhibit.id.toLowerCase().includes(searchTerm)
                );
            }

            const projectType = projectTypeFilter.value;
            if (projectType) {
                filtered = filtered.filter(exhibit => exhibit.projectType === projectType);
            }

            const artLocation = artLocationFilter.value;
            if (artLocation) {
                filtered = filtered.filter(exhibit => exhibit.artLocation === artLocation);
            }

            const accessibility = accessibilityFilter.value;
            if (accessibility) {
                filtered = filtered.filter(exhibit => exhibit.accessibility === accessibility);
            }

            filteredExhibits = filtered;
            renderEventCards(filteredExhibits);
        }

        searchInput.addEventListener('input', applyFilters);
        projectTypeFilter.addEventListener('change', applyFilters);
        artLocationFilter.addEventListener('change', applyFilters);
        accessibilityFilter.addEventListener('change', applyFilters);

        const searchButton = document.querySelector('.search-button');
        searchButton.addEventListener('click', applyFilters);
    }

    function init() {
        renderEventCards();
        setupFilters();
    }

    init();
});