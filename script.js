// Crop Analysis Form Handler
document.getElementById('cropAnalysisForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('cropImage');
    const resultDiv = document.getElementById('analysisResult');
    
    if (fileInput.files.length > 0) {
        // In a real app, this would upload to a server for analysis
        resultDiv.innerHTML = `
            <div class="p-4 bg-green-50 rounded-lg">
                <h4 class="font-semibold text-green-800 mb-2">Analysis Results</h4>
                <p class="text-gray-700">Our system detected: <span class="font-medium">Leaf Rust</span></p>
                <p class="text-gray-700 mt-2">Recommended treatment: <span class="font-medium">Apply neem oil spray every 7 days for 3 weeks</span></p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="p-4 bg-red-50 rounded-lg">
                <p class="text-red-700">Please select an image to analyze</p>
            </div>
        `;
    }
});

// Weather Widget
function fetchWeather() {
    // Mock weather data - in a real app this would come from an API
    const weatherData = {
        temperature: 28,
        condition: "Partly Cloudy",
        humidity: 65,
        wind: 12,
        forecast: [
            { day: "Today", high: 30, low: 22, condition: "partly-cloudy" },
            { day: "Tomorrow", high: 29, low: 23, condition: "rain" },
            { day: "Wed", high: 27, low: 21, condition: "rain" },
            { day: "Thu", high: 31, low: 22, condition: "sunny" },
            { day: "Fri", high: 32, low: 23, condition: "sunny" }
        ]
    };

    const weatherWidget = document.getElementById('weatherWidget');
    if (weatherWidget) {
        let html = `
            <div class="bg-white p-4 rounded-lg shadow">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold">Current Weather</h3>
                    <span class="text-2xl font-bold">${weatherData.temperature}°C</span>
                </div>
                <div class="flex items-center mb-4">
                    <i class="fas fa-cloud-sun text-3xl text-blue-500 mr-3"></i>
                    <span>${weatherData.condition}</span>
                </div>
                <div class="grid grid-cols-2 gap-2 mb-4">
                    <div class="flex items-center">
                        <i class="fas fa-tint text-blue-400 mr-2"></i>
                        <span>Humidity: ${weatherData.humidity}%</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-wind text-blue-400 mr-2"></i>
                        <span>Wind: ${weatherData.wind} km/h</span>
                    </div>
                </div>
                <div class="border-t pt-3">
                    <h4 class="font-medium mb-2">5-Day Forecast</h4>
                    <div class="grid grid-cols-5 gap-2">
        `;

        weatherData.forecast.forEach(day => {
            let icon;
            if (day.condition === "sunny") icon = "fa-sun";
            else if (day.condition === "rain") icon = "fa-cloud-rain";
            else icon = "fa-cloud-sun";
            
            html += `
                <div class="text-center">
                    <div class="text-sm font-medium">${day.day}</div>
                    <i class="fas ${icon} text-yellow-500 my-1"></i>
                    <div class="text-xs">
                        <span class="font-medium">${day.high}°</span> / ${day.low}°
                    </div>
                </div>
            `;
        });

        html += `</div></div></div>`;
        weatherWidget.innerHTML = html;
    }
}

// Initialize weather widget when page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchWeather();
    
    // Initialize other components
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const menu = document.querySelector('.md\\:flex.space-x-8');
            menu.classList.toggle('hidden');
        });
    }
});

// Community Chat Mock Data
function loadCommunityPosts() {
    const posts = [
        {
            id: 1,
            user: "Rajesh Kumar",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            time: "2 hours ago",
            content: "Has anyone tried the new organic pest control method? I'm getting great results!",
            replies: [
                {
                    user: "Amit Patel",
                    content: "Yes! It worked wonders for my brinjal plants."
                }
            ]
        },
        {
            id: 2,
            user: "Priya Sharma",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            time: "1 hour ago",
            content: "New government scheme for drip irrigation subsidies announced. Check the announcements section!",
            replies: []
        }
    ];

    const communityFeed = document.getElementById('communityFeed');
    if (communityFeed) {
        let html = '';
        posts.forEach(post => {
            html += `
                <div class="bg-white p-4 rounded-lg shadow mb-4">
                    <div class="flex items-start mb-3">
                        <img src="${post.avatar}" alt="${post.user}" class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <h4 class="font-semibold">${post.user}</h4>
                            <p class="text-sm text-gray-500">Posted ${post.time}</p>
                            <p class="text-gray-700 mt-1">${post.content}</p>
                        </div>
                    </div>
                    ${post.replies.length > 0 ? `
                        <div class="ml-12 pl-3 border-l-2 border-green-200">
                            ${post.replies.map(reply => `
                                <div class="mb-2">
                                    <p class="font-medium">${reply.user}</p>
                                    <p class="text-gray-700">${reply.content}</p>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
        });
        communityFeed.innerHTML = html;
    }
}

// Load community posts when page loads
document.addEventListener('DOMContentLoaded', loadCommunityPosts);
