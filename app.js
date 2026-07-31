// ==========================================
// KEYWORD DATA - US Nature Categories
// ==========================================
const keywordData = {
    "Flowers": [
        "California Poppy fields",
        "Texas Bluebonnets",
        "Cherry Blossoms in Washington DC",
        "Sunflower fields in Kansas",
        "Wildflowers in Colorado meadows",
        "Lupine fields in Texas Hill Country",
        "Magnolia blossoms",
        "Desert Wildflowers in Arizona",
        "Lavender fields in Oregon",
        "Dogwood blooms in Appalachia",
        "Indian Paintbrush in Wyoming",
        "Fireweed in Alaska",
        "Rhododendron in Great Smoky Mountains",
        "Columbine in Rocky Mountains",
        "Lotus flowers in Louisiana bayou"
    ],
    "Mountains": [
        "Rocky Mountains panorama",
        "Mount Rainier at sunrise",
        "Grand Teton peaks",
        "Sierra Nevada mountain range",
        "Cascade Mountains in fog",
        "Appalachian Mountains in autumn",
        "Denali in Alaska",
        "Mount Hood Oregon",
        "Glacier National Park peaks",
        "Smoky Mountains blue haze",
        "Maroon Bells Colorado",
        "Mount Shasta California",
        "Olympic Mountains Washington",
        "Sawtooth Mountains Idaho",
        "Wind River Range Wyoming"
    ],

    "Ocean & Coastline": [
        "Pacific Coast Highway cliffs",
        "Oregon Coast sea stacks",
        "Big Sur California coastline",
        "Hawaiian ocean waves",
        "Maine rocky coastline",
        "Florida Keys turquoise water",
        "Olympic Coast tide pools",
        "Outer Banks North Carolina",
        "Acadia National Park shoreline",
        "Channel Islands California",
        "Na Pali Coast Hawaii",
        "Point Reyes seashore",
        "Cape Cod sand dunes",
        "Pacific Northwest foggy coast",
        "Gulf Coast sunset beach"
    ],
    "Lakes & Rivers": [
        "Crater Lake Oregon",
        "Lake Tahoe crystal water",
        "Yellowstone Lake reflection",
        "Moraine Lake reflections",
        "Lake McDonald Glacier National Park",
        "Colorado River Grand Canyon",
        "Columbia River Gorge",
        "Mississippi River delta",
        "Flathead Lake Montana",
        "Mirror Lake Yosemite",
        "Jenny Lake Grand Teton",
        "Lake Powell Utah",
        "Boundary Waters Minnesota",
        "Emerald Bay Lake Tahoe",
        "Snake River Wyoming"
    ],

    "Forests & Trees": [
        "Redwood Forest California",
        "Aspen groves in Colorado fall",
        "Pacific Northwest old-growth forest",
        "Sequoia giant trees",
        "Vermont maple forest in autumn",
        "Olympic Rainforest moss",
        "Birch forest in New England",
        "Joshua Tree National Park",
        "Pine forest in Montana",
        "Cypress swamp in Louisiana",
        "Bamboo forest in Hawaii",
        "Enchanted Forest Oregon",
        "Muir Woods California",
        "Blue Ridge Parkway autumn trees",
        "Hoh Rainforest Washington"
    ],
    "Deserts & Canyons": [
        "Grand Canyon sunrise",
        "Monument Valley red rocks",
        "Antelope Canyon light beams",
        "Death Valley sand dunes",
        "Bryce Canyon hoodoos",
        "Zion National Park narrows",
        "White Sands New Mexico",
        "Painted Desert Arizona",
        "Arches National Park",
        "Canyonlands Utah",
        "Badlands South Dakota",
        "Joshua Tree desert sunset",
        "Red Rock Canyon Nevada",
        "Sedona red rock formations",
        "Valley of Fire Nevada"
    ],

    "Waterfalls": [
        "Niagara Falls",
        "Yosemite Falls",
        "Multnomah Falls Oregon",
        "Havasu Falls Arizona",
        "Yellowstone Lower Falls",
        "Ruby Falls Tennessee",
        "Palouse Falls Washington",
        "McWay Falls Big Sur",
        "Snoqualmie Falls Washington",
        "Dry Falls Washington",
        "Bridal Veil Falls Colorado",
        "Waimea Falls Hawaii",
        "Cumberland Falls Kentucky",
        "Shoshone Falls Idaho",
        "Proxy Falls Oregon"
    ],
    "Sky & Aurora": [
        "Northern Lights in Alaska",
        "Milky Way over Utah desert",
        "Dramatic storm clouds over Great Plains",
        "Rainbow over Hawaiian mountains",
        "Starry sky over Grand Canyon",
        "Sunset over Pacific Ocean",
        "Lightning storm over Arizona desert",
        "Cloud inversions in Grand Canyon",
        "Sunrise over Appalachian Mountains",
        "Fire sky sunset over Montana",
        "Night sky over Yellowstone",
        "Double rainbow over Colorado",
        "Fog rolling into San Francisco Bay",
        "Supercell storm over Kansas",
        "Moonrise over desert landscape"
    ]
};


// ==========================================
// STYLE OPTIONS
// ==========================================
const styleOptions = [
    { name: "Premium Photorealistic Landscape Photography", desc: "Ultra-realistic photo" },
    { name: "Cinematic Film Style", desc: "Movie-like visuals" },
    { name: "Watercolor Painting", desc: "Soft watercolor art" },
    { name: "Oil Painting", desc: "Classic oil painting" },
    { name: "Anime / Japanese Animation", desc: "Anime style art" },
    { name: "Digital Art Illustration", desc: "Modern digital art" },
    { name: "Impressionist Painting", desc: "Monet-inspired" },
    { name: "Minimalist Design", desc: "Clean & minimal" },
    { name: "Retro Vintage Photography", desc: "Nostalgic film look" },
    { name: "Dramatic HDR Photography", desc: "High dynamic range" },
    { name: "Dreamy Ethereal", desc: "Soft & dreamy" },
    { name: "Dark Moody Fine Art", desc: "Dark & atmospheric" },
    { name: "Hyperrealism", desc: "Beyond real detail" },
    { name: "Fantasy Art", desc: "Magical & mythical" },
    { name: "Pixel Art", desc: "Retro pixel style" }
];

// ==========================================
// MOOD OPTIONS
// ==========================================
const moodOptions = [
    "Peaceful, Natural, Inspiring",
    "Dramatic, Bold, Powerful",
    "Serene, Calm, Meditative",
    "Mystical, Enchanting, Magical",
    "Energetic, Vibrant, Alive",
    "Melancholic, Moody, Reflective",
    "Romantic, Warm, Dreamy",
    "Wild, Untamed, Raw",
    "Cozy, Intimate, Comforting",
    "Epic, Grand, Majestic"
];


// ==========================================
// COLOR PALETTE OPTIONS
// ==========================================
const paletteOptions = [
    "Natural Colors",
    "Warm Earth Tones",
    "Cool Blue Tones",
    "Vibrant Saturated Colors",
    "Muted Pastel Colors",
    "Golden Hour Warm Palette",
    "Monochrome Black & White",
    "Autumn Warm Colors",
    "Winter Cool & Crisp",
    "Tropical Vivid Colors",
    "Desert Warm Palette",
    "Forest Green Tones"
];

// ==========================================
// STATE
// ==========================================
let selectedCategory = null;
let selectedKeywords = [];
let customKeywords = [];
let selectedStyle = "Premium Photorealistic Landscape Photography";
let selectedMood = "Peaceful, Natural, Inspiring";
let selectedPalette = "Natural Colors";
let aiSuggestedKeywords = [];
let selectedAiKeywords = [];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderStyleDropdown();
    renderMoodDropdown();
    renderPaletteDropdown();
    loadApiKey();

    // Enter key support for custom keyword input
    document.getElementById('customKeyword').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addCustomKeyword();
        }
    });
});


// ==========================================
// RENDER FUNCTIONS
// ==========================================
function renderCategories() {
    const container = document.getElementById('categoryButtons');
    container.innerHTML = '';
    Object.keys(keywordData).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn' + (selectedCategory === cat ? ' active' : '');
        btn.textContent = cat;
        btn.onclick = () => selectCategory(cat);
        container.appendChild(btn);
    });
}

function selectCategory(cat) {
    selectedCategory = cat;
    selectedKeywords = [];
    renderCategories();
    renderKeywords();
    document.getElementById('keywordSection').style.display = 'block';
    updateSelectedDisplay();
}

function renderKeywords() {
    const container = document.getElementById('keywordChips');
    container.innerHTML = '';
    if (!selectedCategory) return;
    keywordData[selectedCategory].forEach(kw => {
        const chip = document.createElement('button');
        chip.className = 'keyword-chip' + (selectedKeywords.includes(kw) ? ' selected' : '');
        chip.textContent = kw;
        chip.onclick = () => toggleKeyword(kw);
        container.appendChild(chip);
    });
}

function toggleKeyword(kw) {
    const idx = selectedKeywords.indexOf(kw);
    if (idx > -1) {
        selectedKeywords.splice(idx, 1);
    } else {
        selectedKeywords.push(kw);
    }
    renderKeywords();
    updateSelectedDisplay();
}

function updateSelectedDisplay() {
    const el = document.getElementById('selectedKeywords');
    const allKeywords = [...selectedKeywords, ...customKeywords];
    el.textContent = allKeywords.length > 0 ? allKeywords.join(', ') : 'None';
}


function renderStyles() {
    const container = document.getElementById('styleOptions');
    if (!container) return;
    container.innerHTML = '';
    styleOptions.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'style-btn' + (selectedStyle === s.name ? ' active' : '');
        btn.innerHTML = `<strong>${s.name}</strong><br><small>${s.desc}</small>`;
        btn.onclick = () => {
            selectedStyle = s.name;
            renderStyles();
        };
        container.appendChild(btn);
    });
}

function renderMoods() {
    const container = document.getElementById('moodOptions');
    if (!container) return;
    container.innerHTML = '';
    moodOptions.forEach(m => {
        const btn = document.createElement('button');
        btn.className = 'mood-btn' + (selectedMood === m ? ' active' : '');
        btn.textContent = m;
        btn.onclick = () => {
            selectedMood = m;
            renderMoods();
        };
        container.appendChild(btn);
    });
}

function renderPalettes() {
    const container = document.getElementById('paletteOptions');
    if (!container) return;
    container.innerHTML = '';
    paletteOptions.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'palette-btn' + (selectedPalette === p ? ' active' : '');
        btn.textContent = p;
        btn.onclick = () => {
            selectedPalette = p;
            renderPalettes();
        };
        container.appendChild(btn);
    });
}

function changeCount(delta) {
    const input = document.getElementById('imageCount');
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    if (val > 50) val = 50;
    input.value = val;
}


// ==========================================
// DROPDOWN RENDER FUNCTIONS
// ==========================================
function renderStyleDropdown() {
    const select = document.getElementById('styleSelect');
    if (!select) return;
    select.innerHTML = '';
    styleOptions.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.name;
        opt.textContent = `${s.name} — ${s.desc}`;
        if (s.name === selectedStyle) opt.selected = true;
        select.appendChild(opt);
    });
}

function renderMoodDropdown() {
    const select = document.getElementById('moodSelect');
    if (!select) return;
    select.innerHTML = '';
    moodOptions.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m;
        if (m === selectedMood) opt.selected = true;
        select.appendChild(opt);
    });
}

function renderPaletteDropdown() {
    const select = document.getElementById('paletteSelect');
    if (!select) return;
    select.innerHTML = '';
    paletteOptions.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        if (p === selectedPalette) opt.selected = true;
        select.appendChild(opt);
    });
}


// ==========================================
// COLLAPSIBLE SECTIONS
// ==========================================
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(sectionId + '-icon');
    if (section.classList.contains('open')) {
        section.classList.remove('open');
        icon.textContent = '►';
    } else {
        section.classList.add('open');
        icon.textContent = '▼';
    }
}


// ==========================================
// RESET ALL
// ==========================================
function resetAll() {
    // Reset state
    selectedCategory = null;
    selectedKeywords = [];
    customKeywords = [];
    selectedStyle = "Premium Photorealistic Landscape Photography";
    selectedMood = "Peaceful, Natural, Inspiring";
    selectedPalette = "Natural Colors";
    aiSuggestedKeywords = [];
    selectedAiKeywords = [];

    // Reset UI
    renderCategories();
    document.getElementById('keywordSection').style.display = 'none';
    document.getElementById('keywordChips').innerHTML = '';
    document.getElementById('customKeywordTags').innerHTML = '';
    document.getElementById('customKeyword').value = '';
    updateSelectedDisplay();

    // Reset dropdowns
    renderStyleDropdown();
    renderMoodDropdown();
    renderPaletteDropdown();

    // Reset image count
    document.getElementById('imageCount').value = 15;

    // Hide output
    document.getElementById('outputSection').style.display = 'none';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ==========================================
// RANDOM KEYWORD
// ==========================================
function randomKeywords() {
    if (!selectedCategory) {
        // Pick a random category first
        const categories = Object.keys(keywordData);
        selectedCategory = categories[Math.floor(Math.random() * categories.length)];
        renderCategories();
        document.getElementById('keywordSection').style.display = 'block';
    }

    const keywords = keywordData[selectedCategory];
    const count = Math.floor(Math.random() * 3) + 1; // Random 1-3 keywords
    selectedKeywords = [];

    const shuffled = [...keywords].sort(() => Math.random() - 0.5);
    selectedKeywords = shuffled.slice(0, count);

    renderKeywords();
    updateSelectedDisplay();
}


// ==========================================
// CUSTOM KEYWORD
// ==========================================
function addCustomKeyword() {
    const input = document.getElementById('customKeyword');
    const value = input.value.trim();
    if (!value) return;
    if (customKeywords.includes(value)) {
        alert('This keyword already exists!');
        return;
    }
    customKeywords.push(value);
    input.value = '';
    renderCustomTags();
    updateSelectedDisplay();
}

function removeCustomKeyword(kw) {
    customKeywords = customKeywords.filter(k => k !== kw);
    renderCustomTags();
    updateSelectedDisplay();
}

function renderCustomTags() {
    const container = document.getElementById('customKeywordTags');
    container.innerHTML = '';
    customKeywords.forEach(kw => {
        const tag = document.createElement('span');
        tag.className = 'custom-tag';
        tag.innerHTML = `${kw} <span class="remove-tag" onclick="removeCustomKeyword('${kw.replace(/'/g, "\\'")}')">&times;</span>`;
        container.appendChild(tag);
    });
}


// ==========================================
// GEMINI AI SUGGESTION
// ==========================================
function saveApiKey() {
    const key = document.getElementById('geminiApiKey').value.trim();
    if (!key) {
        document.getElementById('apiKeyStatus').textContent = 'Please enter an API key.';
        document.getElementById('apiKeyStatus').style.color = '#ff6b6b';
        return;
    }
    localStorage.setItem('gemini_api_key', key);
    document.getElementById('apiKeyStatus').textContent = 'API Key saved successfully!';
    document.getElementById('apiKeyStatus').style.color = '#64ffda';
    setTimeout(() => {
        document.getElementById('apiKeyStatus').textContent = '';
    }, 3000);
}

function loadApiKey() {
    const key = localStorage.getItem('gemini_api_key');
    if (key) {
        document.getElementById('geminiApiKey').value = key;
        document.getElementById('apiKeyStatus').textContent = 'API Key loaded from storage.';
        document.getElementById('apiKeyStatus').style.color = '#64ffda';
    }
}

function openAiModal() {
    const key = localStorage.getItem('gemini_api_key');
    if (!key) {
        alert('Please save your Gemini API key first! (Scroll down to the API Settings section)');
        return;
    }
    document.getElementById('aiModal').style.display = 'flex';
    document.getElementById('aiResults').style.display = 'none';
    document.getElementById('aiLoading').style.display = 'none';
}

function closeAiModal() {
    document.getElementById('aiModal').style.display = 'none';
}

async function getAiSuggestions() {
    const apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
        alert('No API key found!');
        return;
    }

    const userPrompt = document.getElementById('aiPromptInput').value.trim();
    if (!userPrompt) {
        alert('Please describe what kind of keywords you want!');
        return;
    }

    // Show loading
    document.getElementById('aiLoading').style.display = 'block';
    document.getElementById('aiResults').style.display = 'none';
    document.getElementById('aiGenerateBtn').disabled = true;

    const systemPrompt = `You are a creative nature keyword generator for AI image generation. 
The user wants unique nature-related keywords specifically about locations and scenes in the United States.
Generate exactly 10 unique, specific, and descriptive keywords based on the user's request.
Each keyword should be a short phrase (3-8 words) that describes a specific natural scene or element.
Return ONLY a JSON array of strings, no other text. Example: ["keyword 1", "keyword 2", ...]`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `${systemPrompt}\n\nUser request: ${userPrompt}` }]
                }],
                generationConfig: {
                    temperature: 1.0,
                    maxOutputTokens: 1024
                }
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || 'API error occurred');
        }

        const text = data.candidates[0].content.parts[0].text;
        // Parse JSON from response (handle markdown code blocks)
        let keywords;
        const jsonMatch = text.match(/\[[\s\S]*?\]/);
        if (jsonMatch) {
            keywords = JSON.parse(jsonMatch[0]);
        } else {
            throw new Error('Could not parse AI response');
        }

        aiSuggestedKeywords = keywords;
        selectedAiKeywords = [];
        renderAiKeywords();
        document.getElementById('aiResults').style.display = 'block';

    } catch (error) {
        alert('Error: ' + error.message + '\n\nPlease check your API key and try again.');
    } finally {
        document.getElementById('aiLoading').style.display = 'none';
        document.getElementById('aiGenerateBtn').disabled = false;
    }
}

function renderAiKeywords() {
    const container = document.getElementById('aiKeywordChips');
    container.innerHTML = '';
    aiSuggestedKeywords.forEach(kw => {
        const chip = document.createElement('button');
        chip.className = 'ai-chip' + (selectedAiKeywords.includes(kw) ? ' selected' : '');
        chip.textContent = kw;
        chip.onclick = () => toggleAiKeyword(kw);
        container.appendChild(chip);
    });
}

function toggleAiKeyword(kw) {
    const idx = selectedAiKeywords.indexOf(kw);
    if (idx > -1) {
        selectedAiKeywords.splice(idx, 1);
    } else {
        selectedAiKeywords.push(kw);
    }
    renderAiKeywords();
}

function addAllAiKeywords() {
    if (selectedAiKeywords.length === 0) {
        alert('Please select at least one AI suggested keyword!');
        return;
    }
    selectedAiKeywords.forEach(kw => {
        if (!customKeywords.includes(kw)) {
            customKeywords.push(kw);
        }
    });
    renderCustomTags();
    updateSelectedDisplay();
    closeAiModal();
    alert(`Added ${selectedAiKeywords.length} keyword(s) to your custom keywords!`);
}


// ==========================================
// GENERATE TEMPLATE
// ==========================================
function generateTemplate() {
    const allKeywords = [...selectedKeywords, ...customKeywords];
    if (allKeywords.length === 0) {
        alert('Please select at least one keyword or add a custom keyword!');
        return;
    }

    const keyword = allKeywords.join(', ');
    const imageCount = document.getElementById('imageCount').value;

    const template = `==================================================
AI NATURE IMAGE GENERATION TEMPLATE
==================================================

Keyword:
${keyword}

Style:
${selectedStyle}
(Default: Premium Photorealistic Landscape Photography)

Mood:
${selectedMood}
(Default: Peaceful, Natural, Inspiring)

Color Palette:
${selectedPalette}
(Default: Natural Colors)

Aspect Ratio:
9:16

Number of Images:
${imageCount}

==================================================
IMAGE REQUIREMENTS
==================================================

Create a collection of unique, premium-quality images based on the keyword above.

- The images must accurately represent the provided keyword while maintaining a beautiful natural United States environment whenever appropriate.
- Apply the selected style consistently across the entire collection.
- If no style is specified, use premium photorealistic landscape photography.
- If no mood is specified, create a peaceful, inspiring, and immersive atmosphere.
- If no color palette is specified, use realistic natural colors.

Each image should look as if it was created by a different professional artist or photographer while maintaining a consistent overall quality.

Image Quality

- Ultra-realistic or faithfully rendered in the selected art style.
- Professional quality.
- 8K resolution.
- HDR.
- Extremely detailed.
- Sharp focus.
- Rich environmental depth.
- Natural lighting.
- High dynamic range.
- Premium composition.

Wallpaper Requirements

- Vertical 9:16
- Optimized for iPhone wallpapers.
- Clean composition.
- Leave comfortable negative space.
- No important subject cropped by screen edges.

Do NOT include

- People
- Animals (unless included in the keyword)
- Buildings
- Roads
- Vehicles
- Text
- Logos
- Watermarks
- Borders
- UI elements
- Artificial objects unrelated to the keyword`;

    const template2 = `
==================================================
IMAGE VARIETY
==================================================

Generate ${imageCount} completely different images.

Never repeat:

- Composition
- Camera angle
- Camera distance
- Focal length
- Lighting
- Season
- Weather
- Color balance
- Viewpoint
- Framing
- Background
- Perspective

Each image should feel like a completely different photograph or artwork.

==================================================
CAMERA DISTANCE
==================================================

Create a balanced mix of

- Extreme Close-up
- Close-up
- Medium Shot
- Medium Wide
- Wide Landscape
- Ultra-wide Vista
- Distant Telephoto

==================================================
CAMERA ANGLES
==================================================

Use a variety of

- Eye Level
- Low Angle
- High Angle
- Ground Level
- Bird's-eye View
- Mountain Ridge View
- Cliff-edge Perspective
- Forest Trail View
- Lakeside View
- Valley Overlook

==================================================
COMPOSITION
==================================================

Use different professional compositions

- Rule of Thirds
- Leading Lines
- Natural Framing
- Reflection
- Layered Depth
- Strong Foreground
- Minimalist
- Center Composition
- Diagonal Composition
- Negative Space
- Symmetry
- Asymmetry

==================================================
LENS VARIETY
==================================================

Mix different focal lengths

- 16mm
- 24mm
- 35mm
- 50mm
- 85mm
- 135mm
- 200mm`;

    const template3 = `
==================================================
LIGHTING
==================================================

Mix different lighting conditions

- Sunrise
- Golden Hour
- Sunset
- Blue Hour
- Soft Morning Light
- Warm Afternoon Light
- Overcast Light
- Diffused Light
- Backlighting
- Side Lighting
- Volumetric Light
- Sun Rays
- Misty Light
- Dramatic Clouds

==================================================
WEATHER
==================================================

Use different weather conditions

- Clear Sky
- Morning Mist
- Light Fog
- Heavy Fog
- Low Clouds
- Dramatic Clouds
- Fresh Air
- Light Rain
- Snowfall
- Frost

==================================================
SEASON
==================================================

Create a balanced mix of

- Spring
- Summer
- Autumn
- Winter

==================================================
LOCATION VARIETY
==================================================

When appropriate, take inspiration from diverse natural environments across the United States.

Examples include

- Rocky Mountains
- Yosemite
- Yellowstone
- Glacier National Park
- Grand Teton
- Mount Rainier
- Sierra Nevada
- Cascade Mountains
- Great Smoky Mountains
- Olympic National Park
- Colorado
- Montana
- Wyoming
- Utah
- Oregon
- Washington
- Arizona
- Alaska
- Appalachian Mountains

Do not repeatedly use the same location.`;

    const template4 = `
==================================================
VISUAL STYLE
==================================================

Prioritize a premium visual aesthetic that appeals to audiences in the United States.

Inspired by

- National Geographic
- Apple Wallpapers
- Outdoor Magazine
- Travel + Leisure
- Professional Landscape Photography
- Luxury Coffee Table Books

The final collection should feel

- Premium
- Authentic
- Timeless
- Natural
- Elegant
- Immersive
- High-end
- Commercial quality

==================================================
QUALITY CONTROL
==================================================

Every image must

- Feel unique
- Have a different perspective
- Have different framing
- Have different lighting
- Have different environmental conditions
- Avoid repetitive layouts
- Avoid repetitive colors
- Avoid repetitive viewpoints

The complete collection should look like the work of multiple award-winning landscape photographers or artists exploring different moments, locations, and perspectives.

==================================================
CAPTION
==================================================

After generating all images, create ONE caption for the entire collection.

Requirements

- Natural conversational US English.
- Around 30-60 words.
- Mobile-friendly.
- Easy to read.
- Short paragraphs.
- Include 2-4 natural emojis.
- Warm, inspiring, and engaging.
- Encourage viewers to pause, appreciate nature, or imagine themselves there.
- End with one simple question to encourage comments.
- Do not mention AI.
- Do not mention image generation.
- Do not mention prompts.
- Do not mention wallpapers.
- Sound like it was written by a native US social media creator.

==================================================
HASHTAGS
==================================================

Include exactly 5 hashtags.

Requirements

- Popular in the United States.
- Relevant to the keyword.
- Relevant to nature.
- Relevant to landscape photography.
- Place them only at the end.
- Do not include more than 5 hashtags.

==================================================
END
==================================================`;

    const fullTemplate = template + template2 + template3 + template4;

    document.getElementById('templateOutput').textContent = fullTemplate;
    document.getElementById('outputSection').style.display = 'block';
    document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
}


// ==========================================
// COPY TO CLIPBOARD
// ==========================================
function copyTemplate() {
    const text = document.getElementById('templateOutput').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = 'Copied!';
        btn.style.background = 'rgba(100, 255, 218, 0.4)';
        setTimeout(() => {
            btn.textContent = 'Copy to Clipboard';
            btn.style.background = 'rgba(100, 255, 218, 0.15)';
        }, 2000);
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const btn = document.querySelector('.copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy to Clipboard'; }, 2000);
    });
}
