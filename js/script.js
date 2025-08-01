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
            isAccessible: true,
            isKidFriendly: false
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
            isAccessible: true,
            isKidFriendly: true
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
            isAccessible: false,
            isKidFriendly: false
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
            isAccessible: true,
            isKidFriendly: true
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
            isAccessible: false,
            isKidFriendly: true
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
            isAccessible: true,
            isKidFriendly: false
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
            isAccessible: true,
            isKidFriendly: false
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
            isAccessible: true,
            isKidFriendly: false
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
            isAccessible: true,
            isKidFriendly: false
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
            isAccessible: true,
            isKidFriendly: true
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
            isAccessible: true,
            isKidFriendly: true
        },
    ];

    let map;
    let markers = {};
    let markerClusterGroup;
    let currentActiveCard = null;
    let currentActiveMarker = null;

    function initializeMap() {
        map = L.map('map').setView([43.6532, -79.3832], 13);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 20
        }).addTo(map);

        markerClusterGroup = L.markerClusterGroup({
            maxClusterRadius: 50,
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true
        });

        addMarkersToMap();
        map.addLayer(markerClusterGroup);
    }

    function addMarkersToMap() {
        exhibits.forEach(exhibit => {
            const customIcon = L.divIcon({
                className: 'custom-marker-icon',
                html: '',
                iconSize: [24, 24],
                iconAnchor: [6, 21]
            });

            const marker = L.marker([exhibit.location.lat, exhibit.location.lng], { 
                icon: customIcon 
            });

            const popupContent = createPopupContent(exhibit);
            marker.bindPopup(popupContent);

            marker.on('click', () => {
                setActiveExhibit(exhibit.id);
            });

            markers[exhibit.id] = marker;
            markerClusterGroup.addLayer(marker);
        });
    }

    function createPopupContent(exhibit) {
        return `
            <div class="popup-content">
                <h3 class="popup-title">${exhibit.title}</h3>
                <p class="popup-date">📅 ${exhibit.date}</p>
                <p class="popup-date">⏰ ${exhibit.time}</p>
                <p class="popup-location">📍 ${exhibit.venue}</p>
                <p class="popup-description">${exhibit.description}</p>
            </div>
        `;
    }

    function createEventCard(exhibit) {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.dataset.id = exhibit.id;
        
        card.innerHTML = `
            <h3 class="event-title">${exhibit.title}</h3>
            <div class="event-date">
                <span class="event-icon">📅</span>
                <span>${exhibit.date}</span>
            </div>
            <div class="event-time">
                <span class="event-icon">⏰</span>
                <span>${exhibit.time}</span>
            </div>
            <div class="event-location">
                <span class="event-icon">📍</span>
                <span>${exhibit.venue}</span>
            </div>
            <p class="event-description">${exhibit.description}</p>
        `;

        card.addEventListener('click', () => {
            navigateToExhibit(exhibit.id);
        });

        return card;
    }

    function renderEventCards(exhibitsToRender = exhibits) {
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = '';

        if (exhibitsToRender.length === 0) {
            eventsList.innerHTML = '<div class="no-results">No events found matching your search.</div>';
            return;
        }

        exhibitsToRender.forEach(exhibit => {
            const card = createEventCard(exhibit);
            eventsList.appendChild(card);
        });
    }

    function navigateToExhibit(exhibitId) {
        const exhibit = exhibits.find(e => e.id === exhibitId);
        if (!exhibit) return;

        const marker = markers[exhibitId];
        if (!marker) return;

        const latLng = marker.getLatLng();
        map.setView(latLng, 16);
        
        setTimeout(() => {
            marker.openPopup();
        }, 500);

        setActiveExhibit(exhibitId);
    }

    function setActiveExhibit(exhibitId) {
        if (currentActiveCard) {
            currentActiveCard.classList.remove('active');
        }
        if (currentActiveMarker) {
            currentActiveMarker.getElement()?.classList.remove('active');
        }

        const card = document.querySelector(`[data-id="${exhibitId}"]`);
        const marker = markers[exhibitId];

        if (card) {
            card.classList.add('active');
            currentActiveCard = card;
            
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }

        if (marker) {
            marker.getElement()?.classList.add('active');
            currentActiveMarker = marker;
        }
    }

    function setupSearch() {
        const searchInput = document.getElementById('search-input');
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                renderEventCards(exhibits);
                return;
            }

            const filteredExhibits = exhibits.filter(exhibit => 
                exhibit.title.toLowerCase().includes(searchTerm) ||
                exhibit.artist.toLowerCase().includes(searchTerm) ||
                exhibit.description.toLowerCase().includes(searchTerm) ||
                exhibit.venue.toLowerCase().includes(searchTerm)
            );

            renderEventCards(filteredExhibits);
        });
    }

    function handleMapClick() {
        map.on('click', (e) => {
            if (currentActiveCard) {
                currentActiveCard.classList.remove('active');
                currentActiveCard = null;
            }
            if (currentActiveMarker) {
                currentActiveMarker.getElement()?.classList.remove('active');
                currentActiveMarker = null;
            }
        });
    }

    function init() {
        initializeMap();
        renderEventCards();
        setupSearch();
        handleMapClick();
    }

    init();
});