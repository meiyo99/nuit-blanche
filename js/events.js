document.addEventListener('DOMContentLoaded', () => {
    const exhibits = [
        {
            id: 'exhibit-1',
            title: 'Riparia',
            artist: 'Emilija Škarnulytė',
            description: 'A stunning large-scale projection installation that transformed the historic Canada Malting Silos into an immersive aquatic temple. Through mythology, future archeology and climate science, the artist invited thousands on a thought-provoking journey highlighting themes of nature, goddess energy and environmental preservation.',
            location: { lat: 43.6396, lng: -79.3980 },
            venue: 'Canada Malting Silos',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'projection',
            artLocation: 'waterfront',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-2',
            title: 'Snail Work, Or Give the Colours What Turns You Please',
            artist: 'Shannon Garden-Smith',
            description: 'A beautiful interactive installation where the artist covered an entire retail space floor with colourful patterns made of sand inspired by paper-marbling. The art wasn\'t complete until visitors walked across the sand, leaving their mark on the piece and creating swirls of colour on a giant scale.',
            location: { lat: 43.6429, lng: -79.3674 },
            venue: 'Retail space on Queens Quay East',
            date: 'October 5, 2024',
            time: '7:00 PM - 7:00 AM',
            projectType: 'interactive',
            artLocation: 'waterfront',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-3',
            title: 'Coalescing Towards',
            artist: 'Michele Rizzo',
            description: 'A 12-hour contemporary dance performance inspired by "pedestrian movements" - the ordinary, everyday actions of daily life. Italian choreographer Michele Rizzo collaborated with the Toronto Dance Theatre on this piece.',
            location: { lat: 43.6515, lng: -79.3835 },
            venue: 'STRUT, Perth Moves',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'performance',
            artLocation: 'downtown',
            accessibility: 'audio-description'
        },
        {
            id: 'exhibit-4',
            title: 'Your Wish is Your Command',
            artist: 'Divya Mehra',
            description: 'A colossal inflatable magic lamp that spouted smoke all night without ever producing a genie. Installed in Toronto\'s financial district, this work offered a gentle reminder that colonial structures continue to uplift some rather than others, questioning whose wishes are granted in the TD Centre plaza.',
            location: { lat: 43.6479, lng: -79.3808 },
            venue: 'TD Centre Courtyard',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'financial-district',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-5',
            title: 'A Practical Guide',
            artist: 'Divya Mehra',
            description: 'An enormous inflatable plastic bag with "LOOT" replacing "THANK YOU" - confronting the colonial legacy of Hudson\'s Bay Company. The word "loot" has Hindi etymological roots and was repurposed by the British during their rule of India, inviting audiences to "take what they\'re owed."',
            location: { lat: 43.6471, lng: -79.3801 },
            venue: '390 Bay Street',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'financial-district',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-6',
            title: 'Wellspring',
            artist: 'Jenine Marsh',
            description: 'An ambitious architectural intervention where hundreds of concrete pavers were lifted from Nathan Phillips Square, revealing the forgotten space beneath and decades of detritus, plus original sculptures including life-size flowers, feet, and burbling fountains.',
            location: { lat: 43.6527, lng: -79.3835 },
            venue: 'Nathan Phillips Square',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'downtown',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-7',
            title: 'Eclipse',
            artist: 'Naomi Rincón Gallardo',
            description: 'A film about the climate apocalypse featuring a cast of singing and dancing performers dressed as bats, possums and other creatures. For Nuit Blanche, an animatronic butterfly creature with knife wings was installed in the underground loading dock.',
            location: { lat: 43.6534, lng: -79.3839 },
            venue: '100 Queen Street West',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'downtown',
            accessibility: 'low-sensory'
        },
        {
            id: 'exhibit-8',
            title: 'Namahisvarri',
            artist: 'Carola Grahn',
            description: 'A 10-metre-high inflatable mountain recreation of a sacred mountain in northern Scandinavia. Created by a Sami artist, this whimsical installation hoped that once miners have ground real mountains to nothing, the world will replace rocks with inflatables.',
            location: { lat: 43.7676, lng: -79.4135  },
            venue: 'Mel Lastman Square',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-9',
            title: 'Skin Deep',
            artist: 'Chun Hua Catherine Dong',
            description: 'A photography installation exposing Asian concepts of loss of face or shame by covering portraits in colourful Chinese fabrics, exploring cultural identity and immigrant experiences.',
            location: { lat: 43.7680, lng: -79.4128  },
            venue: '5120 Yonge Street',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'audio-description'
        },
        {
            id: 'exhibit-10',
            title: 'Mountain of Dreams',
            artist: 'Indigenous Art Collective',
            description: 'A massive inflatable mountain installation sitting in a reflecting pool, representing the connection between urban development and traditional Indigenous territories. Visitors can walk around the perimeter as the mountain slowly changes colors throughout the night.',
            location: { lat: 43.7673, lng: -79.4142 },
            venue: 'Mel Lastman Square North',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'wheelchair-accessible'
        },
        {
            id: 'exhibit-11',
            title: 'Suburban Constellations',
            artist: 'Maya Chen',
            description: 'Hundreds of LED lights suspended at various heights create an artificial constellation above the North York Civic Centre plaza. The installation responds to pedestrian movement, with lights dimming and brightening to create patterns that mirror actual star formations visible from Toronto.',
            location: { lat: 43.7685, lng: -79.4155 },
            venue: 'North York Civic Centre Plaza',
            date: 'October 5, 2025',
            time: '7:00 PM - 7:00 AM',
            projectType: 'installation',
            artLocation: 'north-york',
            accessibility: 'wheelchair-accessible'
        },
    ];

    let filteredExhibits = [...exhibits];

    function createEventCard(exhibit, index) {
        const card = document.createElement('div');
        card.className = 'event-card-grid';
        card.dataset.id = exhibit.id;
        
        card.innerHTML = `
            <div class="event-card-image">
                <div class="event-number">${String(index + 1).padStart(2, '0')}</div>
                <div class="event-placeholder-image"></div>
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
            
            // Add click event listener to navigate to event description page
            card.addEventListener('click', function() {
                // For now, we'll navigate to the Riparia event description for the first exhibit
                // In the future, this could be made dynamic based on exhibit.id
                if (exhibit.id === 'exhibit-1') {
                    window.location.href = 'event-description.html';
                } else {
                    // For other events, you could create separate description pages
                    // or make the event-description.html page dynamic
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

            // Search filter
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

            // Project type filter
            const projectType = projectTypeFilter.value;
            if (projectType) {
                filtered = filtered.filter(exhibit => exhibit.projectType === projectType);
            }

            // Art location filter
            const artLocation = artLocationFilter.value;
            if (artLocation) {
                filtered = filtered.filter(exhibit => exhibit.artLocation === artLocation);
            }

            // Accessibility filter
            const accessibility = accessibilityFilter.value;
            if (accessibility) {
                filtered = filtered.filter(exhibit => exhibit.accessibility === accessibility);
            }

            filteredExhibits = filtered;
            renderEventCards(filteredExhibits);
        }

        // Event listeners
        searchInput.addEventListener('input', applyFilters);
        projectTypeFilter.addEventListener('change', applyFilters);
        artLocationFilter.addEventListener('change', applyFilters);
        accessibilityFilter.addEventListener('change', applyFilters);

        // Search button functionality
        const searchButton = document.querySelector('.search-button');
        searchButton.addEventListener('click', applyFilters);
    }

    function init() {
        renderEventCards();
        setupFilters();
    }

    init();
});