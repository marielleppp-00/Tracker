/* ==========================================
   FITNESS TRACKER
========================================== */

const STORAGE_KEY = "marielleFitnessTrackerV1";


/* ==========================================
   FOOD DATA
========================================== */

/*
    Fiber is intentionally null for the preset
    foods because the original food data did
    not contain fiber values.

    null means "unknown", not zero.
*/

const foods = [
    {
        name: "Chicken Breast",
        serving: "150g cooked",
        calories: 296,
        protein: 45,
        fiber: null
    },
    {
        name: "Beef Osawa",
        serving: "120g cooked",
        calories: 435,
        protein: 41,
        fiber: null
    },
    {
        name: "Mixed Vegetables",
        serving: "165g cooked",
        calories: 115,
        protein: 3,
        fiber: null
    },
    {
        name: "Banana",
        serving: "1 banana",
        calories: 89,
        protein: null,
        fiber: null
    },
    {
        name: "Chia Seeds",
        serving: "28g / 2 tbsp",
        calories: 140,
        protein: 4,
        fiber: null
    },
    {
        name: "Rice",
        serving: "150g cooked",
        calories: 205,
        protein: 5,
        fiber: null
    },
    {
        name: "Wheat Bread",
        serving: "2 slices",
        calories: 161,
        protein: 7,
        fiber: null
    },
    {
        name: "Protein Shake",
        serving: "1 scoop",
        calories: 124,
        protein: 24,
        fiber: null
    },
    {
        name: "Duck Egg",
        serving: "1 egg",
        calories: 130,
        protein: 8,
        fiber: null
    },
    {
        name: "Kangkong",
        serving: "200g",
        calories: 50,
        protein: 4,
        fiber: null
    }
];


/* ==========================================
   WORKOUT DATA
========================================== */

const workouts = {
    Monday: {
        title: "Chest + Triceps",
        groups: [
            {
                name: "Chest",
                exercises: [
                    "Chest Press",
                    "Close Grip Press",
                    "Chest Flys",
                    "Incline Chest Press"
                ],
                guide: "1 warm-up set | 2 sets to failure"
            },
            {
                name: "Triceps",
                exercises: [
                    "Cable Pushdown",
                    "Overhead Rope",
                    "Reverse Grip Pushdown"
                ],
                guide: "1 warm-up set | 2 sets to failure"
            }
        ]
    },

    Wednesday: {
        title: "Back + Biceps",
        groups: [
            {
                name: "Back",
                exercises: [
                    "Lat Pull Wide Grip",
                    "Lat Push Down",
                    "Barbell Rows Closed and Wide",
                    "Face Pulls"
                ],
                guide: "1 warm-up set | 2 sets to failure"
            },
            {
                name: "Biceps",
                exercises: [
                    "Biceps Curls",
                    "Incline Bench",
                    "Hammer Curls",
                    "Incline Bicep Curls"
                ],
                guide: "1 warm-up set | 2 sets to failure"
            }
        ]
    },

    Friday: {
        title: "Shoulder + Core",
        groups: [
            {
                name: "Shoulder",
                exercises: [
                    "Dumbbell Press",
                    "Shoulder Press",
                    "Front Raises",
                    "Lateral Raises"
                ],
                guide: "3 × 12"
            },
            {
                name: "Core",
                exercises: [
                    "Cable Crunch",
                    "T-Ups",
                    "Hang Leg Raises"
                ],
                guide: "3 × 12"
            }
        ]
    },

    Saturday: {
        title: "Legs",
        groups: [
            {
                name: "Legs",
                exercises: [
                    "Walking / In Place Squats",
                    "Hip Thrust",
                    "Goblet Squats",
                    "Leg Extensions",
                    "Reverse Quad",
                    "Quad Extensions"
                ],
                guide: "3 × 12"
            }
        ]
    }
};


/* ==========================================
   ELEMENT HELPER
========================================== */

const $ = id => document.getElementById(id);


/* ==========================================
   ELEMENTS
========================================== */

const currentDate = $("currentDate");
const weekRange = $("weekRange");

const todayCalories = $("todayCalories");
const dailyTargetDisplay = $("dailyTargetDisplay");
const dailyTargetInput = $("dailyTargetInput");
const saveDailyTargetBtn = $("saveDailyTargetBtn");
const dailyProgress = $("dailyProgress");
const dailyStatus = $("dailyStatus");

const weeklyTargetDisplay = $("weeklyTargetDisplay");
const weeklyTargetInput = $("weeklyTargetInput");
const saveWeeklyTargetBtn = $("saveWeeklyTargetBtn");
const weeklyCalories = $("weeklyCalories");
const weeklyDifference = $("weeklyDifference");

const foodSelect = $("foodSelect");
const foodQuantity = $("foodQuantity");
const foodInfo = $("foodInfo");
const foodServing = $("foodServing");
const foodCalories = $("foodCalories");
const foodProtein = $("foodProtein");
const foodFiber = $("foodFiber");
const addPresetBtn = $("addPresetBtn");

const toggleCalculatorBtn = $("toggleCalculatorBtn");
const closeCalculatorBtn = $("closeCalculatorBtn");
const nutritionCalculator = $("nutritionCalculator");

const customFoodName = $("customFoodName");
const caloriesPerServing = $("caloriesPerServing");
const proteinPerServing = $("proteinPerServing");
const fiberPerServing = $("fiberPerServing");
const servingAmount = $("servingAmount");

const calculatedCalories = $("calculatedCalories");
const calculatedProtein = $("calculatedProtein");
const calculatedFiber = $("calculatedFiber");
const addCalculatedBtn = $("addCalculatedBtn");

const quickFoodName = $("quickFoodName");
const quickCalories = $("quickCalories");
const quickProtein = $("quickProtein");
const quickFiber = $("quickFiber");
const quickAddBtn = $("quickAddBtn");

const foodLog = $("foodLog");
const todayLogTotal = $("todayLogTotal");
const todayProteinTotal = $("todayProteinTotal");
const todayFiberTotal = $("todayFiberTotal");

const workoutDay = $("workoutDay");
const workoutDate = $("workoutDate");
const workoutContent = $("workoutContent");
const showWorkoutBtn = $("showWorkoutBtn");
const closeWorkoutBtn = $("closeWorkoutBtn");
const workoutModal = $("workoutModal");
const workoutModalBackdrop = $("workoutModalBackdrop");

const weekDays = $("weekDays");
const summaryConsumed = $("summaryConsumed");
const summaryTarget = $("summaryTarget");
const summaryDifference = $("summaryDifference");
const summaryProtein = $("summaryProtein");
const summaryFiber = $("summaryFiber");

const archiveCount = $("archiveCount");
const exportBtn = $("exportBtn");

const currentWeightDisplay = $("currentWeightDisplay");
const weightInput = $("weightInput");
const saveWeightBtn = $("saveWeightBtn");
const weightUpdated = $("weightUpdated");

const resetWeekBtn = $("resetWeekBtn");
const resetMessage = $("resetMessage");


/* ==========================================
   DEFAULT DATABASE
========================================== */

function defaultDatabase() {
    return {
        settings: {
            dailyTarget: 0,
            weeklyTarget: 0,
            currentWeight: 0
        },

        days: {},

        weightHistory: [],

        archivedWeeks: []
    };
}


/* ==========================================
   LOAD / SAVE
========================================== */

function loadDatabase() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return defaultDatabase();
        }

        const parsed = JSON.parse(stored);

        return {
            settings: {
                dailyTarget:
                    Number(parsed.settings?.dailyTarget) || 0,

                weeklyTarget:
                    Number(parsed.settings?.weeklyTarget) || 0,

                currentWeight:
                    Number(parsed.settings?.currentWeight) || 0
            },

            days:
                parsed.days || {},

            weightHistory:
                Array.isArray(parsed.weightHistory)
                    ? parsed.weightHistory
                    : [],

            archivedWeeks:
                Array.isArray(parsed.archivedWeeks)
                    ? parsed.archivedWeeks
                    : []
        };
    }

    catch (error) {
        console.error(
            "Could not load tracker data.",
            error
        );

        return defaultDatabase();
    }
}


function saveDatabase(database) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(database)
    );
}


/* ==========================================
   NUMBER HELPERS
========================================== */

function safeNumber(value) {
    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : 0;
}


function roundMacro(value) {
    return Number(
        safeNumber(value).toFixed(1)
    );
}


function formatMacro(value) {
    const number = roundMacro(value);

    return number.toLocaleString(
        undefined,
        {
            maximumFractionDigits: 1
        }
    );
}


/* ==========================================
   DATE HELPERS
========================================== */

function dateKey(date = new Date()) {
    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        );

    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );

    return `${year}-${month}-${day}`;
}


function dateFromKey(key) {
    const parts =
        key
            .split("-")
            .map(Number);

    return new Date(
        parts[0],
        parts[1] - 1,
        parts[2]
    );
}


function getMonday(date = new Date()) {
    const copy =
        new Date(date);

    copy.setHours(
        0,
        0,
        0,
        0
    );

    const day =
        copy.getDay();

    const difference =
        day === 0
            ? -6
            : 1 - day;

    copy.setDate(
        copy.getDate() +
        difference
    );

    return copy;
}


function addDays(date, amount) {
    const copy =
        new Date(date);

    copy.setDate(
        copy.getDate() +
        amount
    );

    return copy;
}


function getWeekDates(date = new Date()) {
    const monday =
        getMonday(date);

    const result = [];

    for (
        let i = 0;
        i < 7;
        i++
    ) {
        result.push(
            addDays(
                monday,
                i
            )
        );
    }

    return result;
}


function getWeekId(date = new Date()) {
    return dateKey(
        getMonday(date)
    );
}


/* ==========================================
   DAILY DATA
========================================== */

function ensureDay(database, key) {
    if (!database.days[key]) {
        database.days[key] = {
            entries: []
        };
    }

    if (
        !Array.isArray(
            database.days[key].entries
        )
    ) {
        database.days[key].entries = [];
    }
}


function getEntriesForDate(database, key) {
    return (
        database.days[key]?.entries ||
        []
    );
}


/* ==========================================
   NUTRITION TOTAL HELPERS
========================================== */

function getNutritionTotals(entries = []) {
    return entries.reduce(
        (totals, entry) => {
            totals.calories +=
                safeNumber(
                    entry.calories
                );

            totals.protein +=
                safeNumber(
                    entry.protein
                );

            totals.fiber +=
                safeNumber(
                    entry.fiber
                );

            return totals;
        },

        {
            calories: 0,
            protein: 0,
            fiber: 0
        }
    );
}


function getDailyNutrition(database, key) {
    return getNutritionTotals(
        getEntriesForDate(
            database,
            key
        )
    );
}


function getDailyTotal(database, key) {
    return Math.round(
        getDailyNutrition(
            database,
            key
        ).calories
    );
}


function getDailyProtein(database, key) {
    return roundMacro(
        getDailyNutrition(
            database,
            key
        ).protein
    );
}


function getDailyFiber(database, key) {
    return roundMacro(
        getDailyNutrition(
            database,
            key
        ).fiber
    );
}


/* ==========================================
   WEEK TOTALS
========================================== */

function getWeeklyNutrition(
    database,
    date = new Date()
) {
    return getWeekDates(date)
        .reduce(
            (totals, day) => {
                const daily =
                    getDailyNutrition(
                        database,
                        dateKey(day)
                    );

                totals.calories +=
                    daily.calories;

                totals.protein +=
                    daily.protein;

                totals.fiber +=
                    daily.fiber;

                return totals;
            },

            {
                calories: 0,
                protein: 0,
                fiber: 0
            }
        );
}


function getWeeklyTotal(
    database,
    date = new Date()
) {
    return Math.round(
        getWeeklyNutrition(
            database,
            date
        ).calories
    );
}


/* ==========================================
   ADD ENTRY
========================================== */

function addEntry(
    name,
    calories,
    protein = 0,
    fiber = 0,
    source = "Manual"
) {
    const calorieAmount =
        Math.round(
            safeNumber(calories)
        );

    const proteinAmount =
        roundMacro(protein);

    const fiberAmount =
        roundMacro(fiber);

    if (
        !Number.isFinite(calorieAmount) ||
        calorieAmount <= 0
    ) {
        return;
    }

    const database =
        loadDatabase();

    const key =
        dateKey();

    ensureDay(
        database,
        key
    );

    database.days[key]
        .entries
        .push({
            id:
                Date.now() +
                Math.floor(
                    Math.random() *
                    1000
                ),

            name:
                String(name || "")
                    .trim() ||
                "Food",

            calories:
                calorieAmount,

            protein:
                proteinAmount,

            fiber:
                fiberAmount,

            source,

            time:
                new Date()
                    .toLocaleTimeString(
                        [],
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
        });

    saveDatabase(
        database
    );

    renderAll();
}


/* ==========================================
   DELETE ENTRY
========================================== */

function deleteEntry(id) {
    const database =
        loadDatabase();

    const key =
        dateKey();

    ensureDay(
        database,
        key
    );

    database.days[key]
        .entries =
        database.days[key]
            .entries
            .filter(
                entry =>
                    entry.id !== id
            );

    saveDatabase(
        database
    );

    renderAll();
}


/* ==========================================
   TARGETS
========================================== */

function saveDailyTarget() {
    const value =
        Math.round(
            Number(
                dailyTargetInput?.value
            )
        );

    if (
        !Number.isFinite(value) ||
        value <= 0
    ) {
        alert(
            "Enter a valid daily calorie target."
        );

        return;
    }

    const database =
        loadDatabase();

    database.settings.dailyTarget =
        value;

    saveDatabase(
        database
    );

    dailyTargetInput.value =
        "";

    renderAll();
}


function saveWeeklyTarget() {
    const value =
        Math.round(
            Number(
                weeklyTargetInput?.value
            )
        );

    if (
        !Number.isFinite(value) ||
        value <= 0
    ) {
        alert(
            "Enter a valid weekly calorie target."
        );

        return;
    }

    const database =
        loadDatabase();

    database.settings.weeklyTarget =
        value;

    saveDatabase(
        database
    );

    weeklyTargetInput.value =
        "";

    renderAll();
}


if (saveDailyTargetBtn) {
    saveDailyTargetBtn
        .addEventListener(
            "click",
            saveDailyTarget
        );
}


if (saveWeeklyTargetBtn) {
    saveWeeklyTargetBtn
        .addEventListener(
            "click",
            saveWeeklyTarget
        );
}


/* ==========================================
   WEIGHT
========================================== */

function saveWeight() {
    if (!weightInput) {
        return;
    }

    const weight =
        Number(
            weightInput.value
        );

    if (
        !Number.isFinite(weight) ||
        weight <= 0
    ) {
        alert(
            "Enter a valid weight."
        );

        return;
    }

    const database =
        loadDatabase();

    database.settings.currentWeight =
        weight;

    database.weightHistory.push({
        date:
            dateKey(),

        weight,

        time:
            new Date()
                .toLocaleTimeString(
                    [],
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                )
    });

    saveDatabase(
        database
    );

    weightInput.value =
        "";

    renderAll();
}


if (saveWeightBtn) {
    saveWeightBtn
        .addEventListener(
            "click",
            saveWeight
        );
}


function renderWeight() {
    if (!currentWeightDisplay) {
        return;
    }

    const database =
        loadDatabase();

    const weight =
        database.settings.currentWeight;

    if (weight > 0) {
        currentWeightDisplay.textContent =
            `${weight.toFixed(1)} kg`;
    }

    else {
        currentWeightDisplay.textContent =
            "Not set";
    }

    if (!weightUpdated) {
        return;
    }

    const history =
        database.weightHistory;

    if (history.length > 0) {
        const latest =
            history[
                history.length - 1
            ];

        const date =
            dateFromKey(
                latest.date
            );

        weightUpdated.textContent =
            `Last updated: ${
                date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }
                )
            }`;
    }

    else {
        weightUpdated.textContent =
            "Enter your current weight";
    }
}


/* ==========================================
   FOOD DROPDOWN
========================================== */

function populateFoods() {
    if (!foodSelect) {
        return;
    }

    foodSelect.innerHTML =
        `<option value="">Choose a food</option>`;

    foods.forEach(
        (food, index) => {
            const option =
                document.createElement(
                    "option"
                );

            option.value =
                String(index);

            option.textContent =
                `${food.name} — ` +
                `${food.calories} kcal`;

            foodSelect.appendChild(
                option
            );
        }
    );
}


if (foodSelect) {
    foodSelect.addEventListener(
        "change",
        () => {
            if (
                foodSelect.value === ""
            ) {
                foodInfo?.classList.add(
                    "hidden"
                );

                return;
            }

            const food =
                foods[
                    Number(
                        foodSelect.value
                    )
                ];

            if (!food) {
                return;
            }

            if (foodServing) {
                foodServing.textContent =
                    food.serving;
            }

            if (foodCalories) {
                foodCalories.textContent =
                    `${food.calories} kcal`;
            }

            if (foodProtein) {
                foodProtein.textContent =
                    food.protein === null
                        ? "—"
                        : `${food.protein}g`;
            }

            if (foodFiber) {
                foodFiber.textContent =
                    food.fiber === null
                        ? "—"
                        : `${food.fiber}g`;
            }

            foodInfo?.classList.remove(
                "hidden"
            );
        }
    );
}


/* ==========================================
   ADD PRESET FOOD
========================================== */

if (addPresetBtn) {
    addPresetBtn.addEventListener(
        "click",
        () => {
            if (
                foodSelect.value === ""
            ) {
                alert(
                    "Choose a food first."
                );

                return;
            }

            const food =
                foods[
                    Number(
                        foodSelect.value
                    )
                ];

            const quantity =
                Number(
                    foodQuantity.value
                );

            if (
                !Number.isFinite(quantity) ||
                quantity <= 0
            ) {
                alert(
                    "Enter a valid number of servings."
                );

                return;
            }

            const totalCalories =
                food.calories *
                quantity;

            const totalProtein =
                food.protein === null
                    ? 0
                    : food.protein *
                      quantity;

            const totalFiber =
                food.fiber === null
                    ? 0
                    : food.fiber *
                      quantity;

            const name =
                quantity === 1
                    ? food.name
                    : `${food.name} × ${quantity}`;

            addEntry(
                name,
                totalCalories,
                totalProtein,
                totalFiber,
                "Preset"
            );

            foodQuantity.value =
                "1";
        }
    );
}


/* ==========================================
   SHOW / HIDE NUTRITION CALCULATOR
========================================== */

function openNutritionCalculator() {
    if (!nutritionCalculator) {
        return;
    }

    nutritionCalculator.classList.remove(
        "hidden"
    );

    if (toggleCalculatorBtn) {
        toggleCalculatorBtn.textContent =
            "− Hide Food Calculator";

        toggleCalculatorBtn.setAttribute(
            "aria-expanded",
            "true"
        );
    }
}


function closeNutritionCalculator() {
    if (!nutritionCalculator) {
        return;
    }

    nutritionCalculator.classList.add(
        "hidden"
    );

    if (toggleCalculatorBtn) {
        toggleCalculatorBtn.textContent =
            "+ Add Food to Track";

        toggleCalculatorBtn.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


if (toggleCalculatorBtn) {
    toggleCalculatorBtn.addEventListener(
        "click",
        () => {
            if (
                nutritionCalculator
                    ?.classList
                    .contains("hidden")
            ) {
                openNutritionCalculator();
            }

            else {
                closeNutritionCalculator();
            }
        }
    );
}


if (closeCalculatorBtn) {
    closeCalculatorBtn.addEventListener(
        "click",
        closeNutritionCalculator
    );
}


/* ==========================================
   NUTRITION CALCULATOR
========================================== */

function updateCalculator() {
    const calories =
        safeNumber(
            caloriesPerServing?.value
        );

    const protein =
        safeNumber(
            proteinPerServing?.value
        );

    const fiber =
        safeNumber(
            fiberPerServing?.value
        );

    const servings =
        safeNumber(
            servingAmount?.value
        );

    const totalCalories =
        Math.max(
            0,
            calories * servings
        );

    const totalProtein =
        Math.max(
            0,
            protein * servings
        );

    const totalFiber =
        Math.max(
            0,
            fiber * servings
        );

    if (calculatedCalories) {
        calculatedCalories.textContent =
            Math.round(
                totalCalories
            ).toLocaleString();
    }

    if (calculatedProtein) {
        calculatedProtein.textContent =
            formatMacro(
                totalProtein
            );
    }

    if (calculatedFiber) {
        calculatedFiber.textContent =
            formatMacro(
                totalFiber
            );
    }
}


[
    caloriesPerServing,
    proteinPerServing,
    fiberPerServing,
    servingAmount
].forEach(
    input => {
        if (input) {
            input.addEventListener(
                "input",
                updateCalculator
            );
        }
    }
);


if (addCalculatedBtn) {
    addCalculatedBtn.addEventListener(
        "click",
        () => {
            const calories =
                safeNumber(
                    caloriesPerServing?.value
                );

            const protein =
                safeNumber(
                    proteinPerServing?.value
                );

            const fiber =
                safeNumber(
                    fiberPerServing?.value
                );

            const servings =
                safeNumber(
                    servingAmount?.value
                );

            const totalCalories =
                calories * servings;

            const totalProtein =
                protein * servings;

            const totalFiber =
                fiber * servings;

            if (
                !Number.isFinite(
                    totalCalories
                ) ||
                totalCalories <= 0 ||
                servings <= 0
            ) {
                alert(
                    "Enter calories and servings first."
                );

                return;
            }

            const name =
                customFoodName?.value
                    .trim() ||
                "Other Food";

            addEntry(
                name,
                totalCalories,
                totalProtein,
                totalFiber,
                "Calculator"
            );

            if (customFoodName) {
                customFoodName.value =
                    "";
            }

            if (caloriesPerServing) {
                caloriesPerServing.value =
                    "";
            }

            if (proteinPerServing) {
                proteinPerServing.value =
                    "";
            }

            if (fiberPerServing) {
                fiberPerServing.value =
                    "";
            }

            if (servingAmount) {
                servingAmount.value =
                    "1";
            }

            updateCalculator();
            closeNutritionCalculator();
        }
    );
}


/* ==========================================
   QUICK ADD
========================================== */

if (quickAddBtn) {
    quickAddBtn.addEventListener(
        "click",
        () => {
            const calories =
                safeNumber(
                    quickCalories?.value
                );

            const protein =
                safeNumber(
                    quickProtein?.value
                );

            const fiber =
                safeNumber(
                    quickFiber?.value
                );

            if (
                !Number.isFinite(calories) ||
                calories <= 0
            ) {
                alert(
                    "Enter the calories first."
                );

                return;
            }

            const name =
                quickFoodName?.value
                    .trim() ||
                "Quick Add";

            addEntry(
                name,
                calories,
                protein,
                fiber,
                "Quick Add"
            );

            if (quickFoodName) {
                quickFoodName.value =
                    "";
            }

            if (quickCalories) {
                quickCalories.value =
                    "";
            }

            if (quickProtein) {
                quickProtein.value =
                    "";
            }

            if (quickFiber) {
                quickFiber.value =
                    "";
            }
        }
    );
}
/* ==========================================
   HEADER DATE
========================================== */

function renderHeader() {
    const now =
        new Date();

    if (currentDate) {
        currentDate.textContent =
            now.toLocaleDateString(
                "en-US",
                {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );
    }

    const dates =
        getWeekDates(now);

    if (weekRange) {
        weekRange.textContent =
            `${
                dates[0].toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric"
                    }
                )
            } – ${
                dates[6].toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric"
                    }
                )
            }`;
    }
}


/* ==========================================
   DASHBOARD
========================================== */

function renderDashboard() {
    const database =
        loadDatabase();

    const todayKey =
        dateKey();

    const todayNutrition =
        getDailyNutrition(
            database,
            todayKey
        );

    const weeklyNutrition =
        getWeeklyNutrition(
            database
        );

    const todayTotal =
        Math.round(
            todayNutrition.calories
        );

    const weekTotal =
        Math.round(
            weeklyNutrition.calories
        );

    const dailyTarget =
        database.settings.dailyTarget;

    const weekTarget =
        database.settings.weeklyTarget;


    /* TODAY'S CALORIES */

    if (todayCalories) {
        todayCalories.textContent =
            todayTotal.toLocaleString();
    }


    /* WEEKLY CALORIES */

    if (weeklyCalories) {
        weeklyCalories.textContent =
            weekTotal.toLocaleString();
    }


    /* ======================================
       DAILY TARGET
    ====================================== */

    if (dailyTarget > 0) {
        if (dailyTargetDisplay) {
            dailyTargetDisplay.textContent =
                `${dailyTarget.toLocaleString()} kcal`;
        }

        const remaining =
            dailyTarget -
            todayTotal;

        if (dailyStatus) {
            dailyStatus.className =
                "status-text";

            if (remaining > 0) {
                dailyStatus.textContent =
                    `${remaining.toLocaleString()} kcal remaining`;

                dailyStatus.classList.add(
                    "status-under"
                );
            }

            else if (remaining === 0) {
                dailyStatus.textContent =
                    "Daily target reached";

                dailyStatus.classList.add(
                    "status-hit"
                );
            }

            else {
                dailyStatus.textContent =
                    `${Math.abs(
                        remaining
                    ).toLocaleString()} kcal over target`;

                dailyStatus.classList.add(
                    "status-over"
                );
            }
        }


        /* DAILY PROGRESS */

        if (dailyProgress) {
            const percent =
                Math.min(
                    100,
                    (
                        todayTotal /
                        dailyTarget
                    ) * 100
                );

            dailyProgress.style.width =
                `${percent}%`;

            dailyProgress.classList.toggle(
                "over",
                todayTotal > dailyTarget
            );
        }
    }

    else {
        if (dailyTargetDisplay) {
            dailyTargetDisplay.textContent =
                "Not set";
        }

        if (dailyStatus) {
            dailyStatus.textContent =
                "Set your daily target";

            dailyStatus.className =
                "status-text";
        }

        if (dailyProgress) {
            dailyProgress.style.width =
                "0%";

            dailyProgress.classList.remove(
                "over"
            );
        }
    }


    /* ======================================
       WEEKLY TARGET
    ====================================== */

    if (weekTarget > 0) {
        if (weeklyTargetDisplay) {
            weeklyTargetDisplay.textContent =
                `${weekTarget.toLocaleString()} kcal`;
        }

        const remaining =
            weekTarget -
            weekTotal;

        if (weeklyDifference) {
            weeklyDifference.className =
                "status-text";

            if (remaining > 0) {
                weeklyDifference.textContent =
                    `${remaining.toLocaleString()} kcal remaining`;

                weeklyDifference.classList.add(
                    "status-under"
                );
            }

            else if (remaining === 0) {
                weeklyDifference.textContent =
                    "Weekly target reached";

                weeklyDifference.classList.add(
                    "status-hit"
                );
            }

            else {
                weeklyDifference.textContent =
                    `${Math.abs(
                        remaining
                    ).toLocaleString()} kcal over target`;

                weeklyDifference.classList.add(
                    "status-over"
                );
            }
        }
    }

    else {
        if (weeklyTargetDisplay) {
            weeklyTargetDisplay.textContent =
                "Not set";
        }

        if (weeklyDifference) {
            weeklyDifference.textContent =
                "Set your weekly target";

            weeklyDifference.className =
                "status-text";
        }
    }
}


/* ==========================================
   TODAY'S FOOD LOG
========================================== */

function renderFoodLog() {
    if (!foodLog) {
        return;
    }

    const database =
        loadDatabase();

    /*
        Only today's date is loaded here.

        This keeps the daily rollover behavior:
        yesterday's food stays saved, but it does
        not appear in today's food log.
    */

    const entries =
        getEntriesForDate(
            database,
            dateKey()
        );

    const totals =
        getNutritionTotals(
            entries
        );


    /* ======================================
       TODAY TOTALS
    ====================================== */

    if (todayLogTotal) {
        todayLogTotal.textContent =
            `${Math.round(
                totals.calories
            ).toLocaleString()} kcal`;
    }

    if (todayProteinTotal) {
        todayProteinTotal.textContent =
            `${formatMacro(
                totals.protein
            )}g protein`;
    }

    if (todayFiberTotal) {
        todayFiberTotal.textContent =
            `${formatMacro(
                totals.fiber
            )}g fiber`;
    }


    foodLog.innerHTML =
        "";


    /* ======================================
       EMPTY FOOD LOG
    ====================================== */

    if (entries.length === 0) {
        foodLog.innerHTML = `
            <div class="empty-state">
                Nothing added yet.
            </div>
        `;

        return;
    }


    /* ======================================
       FOOD ENTRIES
    ====================================== */

    entries.forEach(
        entry => {
            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "food-entry";


            /* FOOD NAME / META */

            const info =
                document.createElement(
                    "div"
                );

            const name =
                document.createElement(
                    "div"
                );

            name.className =
                "food-entry-name";

            name.textContent =
                entry.name ||
                "Food";


            const meta =
                document.createElement(
                    "div"
                );

            meta.className =
                "food-entry-meta";

            const source =
                entry.source ||
                "Food";

            const time =
                entry.time ||
                "";

            meta.textContent =
                time
                    ? `${source} • ${time}`
                    : source;

            info.append(
                name,
                meta
            );


            /* NUTRITION */

            const nutrition =
                document.createElement(
                    "div"
                );

            nutrition.className =
                "food-entry-nutrition";


            const calories =
                document.createElement(
                    "span"
                );

            calories.className =
                "food-entry-calories";

            calories.textContent =
                `${Math.round(
                    safeNumber(
                        entry.calories
                    )
                ).toLocaleString()} kcal`;


            const protein =
                document.createElement(
                    "span"
                );

            protein.className =
                "food-entry-protein";

            protein.textContent =
                `${formatMacro(
                    entry.protein
                )}g protein`;


            const fiber =
                document.createElement(
                    "span"
                );

            fiber.className =
                "food-entry-fiber";

            fiber.textContent =
                `${formatMacro(
                    entry.fiber
                )}g fiber`;


            nutrition.append(
                calories,
                protein,
                fiber
            );


            /* DELETE BUTTON */

            const deleteButton =
                document.createElement(
                    "button"
                );

            deleteButton.type =
                "button";

            deleteButton.className =
                "delete-entry";

            deleteButton.textContent =
                "×";

            deleteButton.title =
                "Delete entry";

            deleteButton.setAttribute(
                "aria-label",
                `Delete ${entry.name || "food"}`
            );

            deleteButton.addEventListener(
                "click",
                () =>
                    deleteEntry(
                        entry.id
                    )
            );


            row.append(
                info,
                nutrition,
                deleteButton
            );

            foodLog.appendChild(
                row
            );
        }
    );
}


/* ==========================================
   WORKOUT
========================================== */

function renderWorkout() {
    if (!workoutContent) {
        return;
    }

    const now =
        new Date();

    const day =
        now.toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );


    /* SHOW DAY */

    if (workoutDay) {
        workoutDay.textContent =
            day;
    }


    /* SHOW DATE */

    if (workoutDate) {
        workoutDate.textContent =
            now.toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );
    }


    /* GET TODAY'S WORKOUT */

    const workout =
        workouts[day];


    /* ======================================
       REST DAY
    ====================================== */

    if (!workout) {
        workoutContent.innerHTML = `
            <div class="workout-title">
                <h3>Rest Day</h3>

                <p>
                    No scheduled workout today.
                </p>
            </div>
        `;

        return;
    }


    /* ======================================
       CLEAR OLD CONTENT
    ====================================== */

    workoutContent.innerHTML =
        "";


    /* ======================================
       WORKOUT TITLE
    ====================================== */

    const title =
        document.createElement(
            "div"
        );

    title.className =
        "workout-title";


    const titleText =
        document.createElement(
            "h3"
        );

    titleText.textContent =
        workout.title;


    title.appendChild(
        titleText
    );

    workoutContent.appendChild(
        title
    );


    /* ======================================
       EXERCISE GROUPS
    ====================================== */

    workout.groups.forEach(
        group => {
            const section =
                document.createElement(
                    "div"
                );

            section.className =
                "workout-group";


            const heading =
                document.createElement(
                    "h4"
                );

            heading.textContent =
                group.name;


            const list =
                document.createElement(
                    "ul"
                );


            group.exercises.forEach(
                exercise => {
                    const item =
                        document.createElement(
                            "li"
                        );

                    item.textContent =
                        exercise;

                    list.appendChild(
                        item
                    );
                }
            );


            const guide =
                document.createElement(
                    "div"
                );

            guide.className =
                "set-guide";

            guide.textContent =
                group.guide;


            section.append(
                heading,
                list,
                guide
            );

            workoutContent.appendChild(
                section
            );
        }
    );
}


/* ==========================================
   WORKOUT POPUP
========================================== */

function openWorkoutModal() {
    if (!workoutModal) {
        return;
    }

    renderWorkout();

    workoutModal.classList.add(
        "open"
    );

    workoutModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function closeWorkoutModal() {
    if (!workoutModal) {
        return;
    }

    workoutModal.classList.remove(
        "open"
    );

    workoutModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* VIEW WORKOUT BUTTON */

if (showWorkoutBtn) {
    showWorkoutBtn.addEventListener(
        "click",
        openWorkoutModal
    );
}


/* X CLOSE BUTTON */

if (closeWorkoutBtn) {
    closeWorkoutBtn.addEventListener(
        "click",
        closeWorkoutModal
    );
}


/* CLICK BACKDROP TO CLOSE */

if (workoutModalBackdrop) {
    workoutModalBackdrop.addEventListener(
        "click",
        closeWorkoutModal
    );
}


/* ESC KEY TO CLOSE */

document.addEventListener(
    "keydown",
    event => {
        if (
            event.key === "Escape" &&
            workoutModal &&
            workoutModal.classList.contains(
                "open"
            )
        ) {
            closeWorkoutModal();
        }
    }
);


/* ==========================================
   WEEK VIEW
========================================== */

function renderWeek() {
    const database =
        loadDatabase();

    const dates =
        getWeekDates();

    const todayKey =
        dateKey();

    const labels = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];


    /* ======================================
       DAILY WEEK ROWS
    ====================================== */

    if (weekDays) {
        weekDays.innerHTML =
            "";

        dates.forEach(
            (date, index) => {
                const key =
                    dateKey(date);

                const nutrition =
                    getDailyNutrition(
                        database,
                        key
                    );


                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "week-row";


                if (key === todayKey) {
                    row.classList.add(
                        "today-row"
                    );
                }


                /* DAY */

                const day =
                    document.createElement(
                        "strong"
                    );

                day.className =
                    "week-day";

                day.textContent =
                    labels[index];


                /* DATE */

                const dateLabel =
                    document.createElement(
                        "span"
                    );

                dateLabel.className =
                    "week-date";

                dateLabel.textContent =
                    date.toLocaleDateString(
                        "en-US",
                        {
                            month: "short",
                            day: "numeric"
                        }
                    );


                /* NUTRITION WRAPPER */

                const nutritionDisplay =
                    document.createElement(
                        "div"
                    );

                nutritionDisplay.className =
                    "week-nutrition";


                /* CALORIES */

                const calories =
                    document.createElement(
                        "strong"
                    );

                calories.className =
                    "week-calories";

                calories.textContent =
                    `${Math.round(
                        nutrition.calories
                    ).toLocaleString()} kcal`;


                /* PROTEIN */

                const protein =
                    document.createElement(
                        "span"
                    );

                protein.className =
                    "week-protein";

                protein.textContent =
                    `${formatMacro(
                        nutrition.protein
                    )}g protein`;


                /* FIBER */

                const fiber =
                    document.createElement(
                        "span"
                    );

                fiber.className =
                    "week-fiber";

                fiber.textContent =
                    `${formatMacro(
                        nutrition.fiber
                    )}g fiber`;


                nutritionDisplay.append(
                    calories,
                    protein,
                    fiber
                );


                row.append(
                    day,
                    dateLabel,
                    nutritionDisplay
                );


                weekDays.appendChild(
                    row
                );
            }
        );
    }


    /* ======================================
       WEEK TOTALS
    ====================================== */

    const weekNutrition =
        getWeeklyNutrition(
            database
        );

    const weekTotal =
        Math.round(
            weekNutrition.calories
        );

    const weekProtein =
        roundMacro(
            weekNutrition.protein
        );

    const weekFiber =
        roundMacro(
            weekNutrition.fiber
        );

    const target =
        database.settings.weeklyTarget;


    /* CALORIES CONSUMED */

    if (summaryConsumed) {
        summaryConsumed.textContent =
            `${weekTotal.toLocaleString()} kcal`;
    }


    /* PROTEIN TOTAL */

    if (summaryProtein) {
        summaryProtein.textContent =
            `${formatMacro(
                weekProtein
            )}g`;
    }


    /* FIBER TOTAL */

    if (summaryFiber) {
        summaryFiber.textContent =
            `${formatMacro(
                weekFiber
            )}g`;
    }


    /* ======================================
       WEEK TARGET / DIFFERENCE
    ====================================== */

    if (target > 0) {
        if (summaryTarget) {
            summaryTarget.textContent =
                `${target.toLocaleString()} kcal`;
        }

        const difference =
            weekTotal -
            target;

        if (summaryDifference) {
            if (difference > 0) {
                summaryDifference.textContent =
                    `+${difference.toLocaleString()} kcal`;
            }

            else {
                summaryDifference.textContent =
                    `${difference.toLocaleString()} kcal`;
            }
        }
    }

    else {
        if (summaryTarget) {
            summaryTarget.textContent =
                "Not set";
        }

        if (summaryDifference) {
            summaryDifference.textContent =
                "—";
        }
    }


    /* ======================================
       ARCHIVE COUNT
    ====================================== */

    if (archiveCount) {
        archiveCount.textContent =
            database.archivedWeeks.length;
    }
}


/* ==========================================
   SUNDAY RESET BUTTON
========================================== */

function updateResetButton() {
    if (!resetWeekBtn) {
        return;
    }

    const now =
        new Date();

    const isSunday =
        now.getDay() === 0;

    resetWeekBtn.disabled =
        !isSunday;


    /* SUNDAY */

    if (isSunday) {
        resetWeekBtn.textContent =
            "Reset & Archive Week";

        if (resetMessage) {
            resetMessage.textContent =
                "Ready to archive and reset this week";
        }
    }


    /* MONDAY – SATURDAY */

    else {
        resetWeekBtn.textContent =
            "🔒 Reset Week";

        if (resetMessage) {
            resetMessage.textContent =
                "Available every Sunday";
        }
    }
}
/* ==========================================
   RESET + ARCHIVE WEEK
========================================== */

function resetCurrentWeek() {
    const now =
        new Date();


    /* ======================================
       ONLY ALLOW RESET ON SUNDAY
    ====================================== */

    if (now.getDay() !== 0) {
        alert(
            "Weekly reset is only available on Sunday."
        );

        return;
    }


    /* ======================================
       CONFIRM RESET
    ====================================== */

    const confirmed =
        confirm(
            "Archive this week's nutrition data and reset the current week?"
        );

    if (!confirmed) {
        return;
    }


    const database =
        loadDatabase();

    const dates =
        getWeekDates(now);

    const monday =
        dates[0];

    const sunday =
        dates[6];

    const weekId =
        dateKey(monday);

    const startKey =
        dateKey(monday);

    const endKey =
        dateKey(sunday);


    /* ======================================
       WEEK DATA
    ====================================== */

    const weekDaysData = {};

    let totalCalories = 0;
    let totalProtein = 0;
    let totalFiber = 0;


    /*
        Copy Monday through Sunday into
        the archive BEFORE deleting the
        active week's food data.

        The complete food entries are copied,
        so calories, protein and fiber are
        preserved in the archive.
    */

    dates.forEach(
        date => {
            const key =
                dateKey(date);

            const entries =
                getEntriesForDate(
                    database,
                    key
                );

            const nutrition =
                getNutritionTotals(
                    entries
                );


            /* STORE THE DAY */

            weekDaysData[key] = {
                entries:
                    JSON.parse(
                        JSON.stringify(
                            entries
                        )
                    )
            };


            /* ADD TO WEEK TOTALS */

            totalCalories +=
                nutrition.calories;

            totalProtein +=
                nutrition.protein;

            totalFiber +=
                nutrition.fiber;
        }
    );


    totalCalories =
        Math.round(
            totalCalories
        );

    totalProtein =
        roundMacro(
            totalProtein
        );

    totalFiber =
        roundMacro(
            totalFiber
        );


    /* ======================================
       TARGETS FOR THIS WEEK
    ====================================== */

    const weeklyTarget =
        Number(
            database.settings.weeklyTarget
        ) || 0;

    const dailyTarget =
        Number(
            database.settings.dailyTarget
        ) || 0;


    const difference =
        weeklyTarget > 0
            ? totalCalories -
              weeklyTarget
            : null;


    /* ======================================
       FIND THIS WEEK'S WEIGHT
    ====================================== */

    /*
        Use the latest weight recorded during
        Monday-Sunday.

        If there was no new weight entry during
        the week, use the currently saved weight.
    */

    const weightsThisWeek =
        (
            database.weightHistory ||
            []
        ).filter(
            entry =>
                entry.date >= startKey &&
                entry.date <= endKey
        );


    let weekWeight =
        Number(
            database.settings.currentWeight
        ) || 0;


    if (
        weightsThisWeek.length > 0
    ) {
        const latestWeight =
            weightsThisWeek[
                weightsThisWeek.length - 1
            ];

        weekWeight =
            Number(
                latestWeight.weight
            ) ||
            weekWeight;
    }


    /* ======================================
       CREATE ARCHIVED WEEK
    ====================================== */

    const archivedWeek = {
        weekId,

        startDate:
            startKey,

        endDate:
            endKey,

        dailyTarget,

        target:
            weeklyTarget,

        totalCalories,

        totalProtein,

        totalFiber,

        difference,

        weight:
            weekWeight,

        days:
            weekDaysData
    };


    /* ======================================
       PREVENT DUPLICATE ARCHIVES
    ====================================== */

    const existingIndex =
        database.archivedWeeks
            .findIndex(
                week =>
                    week.weekId ===
                    weekId
            );


    if (
        existingIndex >= 0
    ) {
        database.archivedWeeks[
            existingIndex
        ] = archivedWeek;
    }

    else {
        database.archivedWeeks.push(
            archivedWeek
        );
    }


    /* KEEP ARCHIVES ORDERED */

    database.archivedWeeks.sort(
        (a, b) =>
            String(
                a.weekId
            ).localeCompare(
                String(
                    b.weekId
                )
            )
    );


    /* ======================================
       DELETE ONLY CURRENT WEEK FOOD DATA
    ====================================== */

    /*
        DO NOT reset:

        - Daily calorie target
        - Weekly calorie target
        - Current weight
        - Weight history
        - Previous archived weeks

        Only Monday-Sunday food/nutrition
        entries for the current week are
        removed.
    */

    dates.forEach(
        date => {
            delete database.days[
                dateKey(date)
            ];
        }
    );


    /* ======================================
       SAVE
    ====================================== */

    saveDatabase(
        database
    );


    /* ======================================
       REFRESH SCREEN
    ====================================== */

    renderAll();


    alert(
        "Week archived successfully. Your calorie, protein, and fiber log has been reset."
    );
}


/* ==========================================
   RESET BUTTON EVENT
========================================== */

if (resetWeekBtn) {
    resetWeekBtn.addEventListener(
        "click",
        resetCurrentWeek
    );
}


/* ==========================================
   EXCEL HELPERS
========================================== */

function calorieStatus(
    consumed,
    target
) {
    const calories =
        Math.round(
            safeNumber(
                consumed
            )
        );

    const goal =
        Math.round(
            safeNumber(
                target
            )
        );


    if (goal <= 0) {
        return "No target";
    }


    const difference =
        calories -
        goal;


    if (difference < 0) {
        return `${Math.abs(
            difference
        ).toLocaleString()} kcal Under`;
    }


    if (difference > 0) {
        return `${difference.toLocaleString()} kcal Over`;
    }


    return "Target Reached";
}


/* ==========================================
   TOTALS FROM ARCHIVED DAYS
========================================== */

function calculateDaysNutrition(
    daysObject = {}
) {
    const totals = {
        calories: 0,
        protein: 0,
        fiber: 0
    };


    Object.values(
        daysObject || {}
    ).forEach(
        day => {
            const nutrition =
                getNutritionTotals(
                    day?.entries || []
                );

            totals.calories +=
                nutrition.calories;

            totals.protein +=
                nutrition.protein;

            totals.fiber +=
                nutrition.fiber;
        }
    );


    return {
        calories:
            Math.round(
                totals.calories
            ),

        protein:
            roundMacro(
                totals.protein
            ),

        fiber:
            roundMacro(
                totals.fiber
            )
    };
}


/* ==========================================
   ARCHIVED DAY NUTRITION
========================================== */

function getArchivedDayNutrition(
    archivedWeek,
    key
) {
    const entries =
        archivedWeek?.days?.[key]
            ?.entries || [];


    return getNutritionTotals(
        entries
    );
}


/* ==========================================
   CURRENT WEEK WEIGHT
========================================== */

function getLatestWeightForRange(
    database,
    startKey,
    endKey,
    fallbackWeight = 0
) {
    const matching =
        (
            database.weightHistory ||
            []
        ).filter(
            entry =>
                entry.date >= startKey &&
                entry.date <= endKey
        );


    if (matching.length > 0) {
        const latest =
            matching[
                matching.length - 1
            ];

        return (
            Number(
                latest.weight
            ) || 0
        );
    }


    return (
        Number(
            fallbackWeight
        ) || 0
    );
}


/* ==========================================
   WEEK DATES FROM ARCHIVE
========================================== */

function getArchivedWeekDates(
    archivedWeek
) {
    /*
        Prefer the saved Monday start date.

        Older saved archive data should also
        work because weekId is the Monday date.
    */

    const startKey =
        archivedWeek.startDate ||
        archivedWeek.weekId;


    if (!startKey) {
        return [];
    }


    const monday =
        dateFromKey(
            startKey
        );


    return Array.from(
        {
            length: 7
        },

        (_, index) =>
            addDays(
                monday,
                index
            )
    );
}


/* ==========================================
   CREATE ONE EXCEL WEEK ROW
========================================== */

function buildWeekExportRow({
    label,
    startDate,
    endDate,
    dates,
    getDayNutrition,
    weeklyTarget,
    weekWeight
}) {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalFiber = 0;

    dates.forEach(date => {
        const nutrition =
            getDayNutrition(dateKey(date));

        totalCalories +=
            safeNumber(nutrition.calories);

        totalProtein +=
            safeNumber(nutrition.protein);

        totalFiber +=
            safeNumber(nutrition.fiber);
    });

    totalCalories =
        Math.round(totalCalories);

    totalProtein =
        roundMacro(totalProtein);

    totalFiber =
        roundMacro(totalFiber);

    const target =
        Math.round(
            safeNumber(weeklyTarget)
        );

    const difference =
        target > 0
            ? totalCalories - target
            : "";

    return {
        "Week":
            label,

        "Date":
            `${startDate} - ${endDate}`,

        "Calories This Week":
            totalCalories,

        "Protein This Week (g)":
            totalProtein,

        "Fiber This Week (g)":
            totalFiber,

        "Calorie Goal This Week":
            target > 0
                ? target
                : "",

        "Calorie Difference":
            difference,

        "This Week's Weight":
            safeNumber(weekWeight) || ""
    };
}


/* ==========================================
   EXCEL COLUMN WIDTHS
========================================== */

function setNutritionSheetWidths(
    worksheet
) {
    worksheet["!cols"] = [
        { wch: 18 },  // Week
        { wch: 30 },  // Date
        { wch: 22 },  // Calories This Week
        { wch: 24 },  // Protein This Week
        { wch: 22 },  // Fiber This Week
        { wch: 24 },  // Calorie Goal
        { wch: 22 },  // Calorie Difference
        { wch: 22 }   // Weight
    ];
}


/* ==========================================
   WEIGHT SHEET WIDTHS
========================================== */

function setWeightSheetWidths(
    worksheet
) {
    worksheet["!cols"] = [
        { wch: 18 },
        { wch: 16 },
        { wch: 18 }
    ];
}
/* ==========================================
   EXCEL EXPORT
========================================== */

function exportToExcel() {
    /*
        SheetJS must be loaded from the HTML
        before script.js.
    */

    if (
        typeof XLSX === "undefined"
    ) {
        alert(
            "Excel export library could not be loaded. Connect to the internet and refresh the page before exporting."
        );

        return;
    }


    const database =
        loadDatabase();

    const rows = [];


    /* ======================================
       ARCHIVED WEEKS
    ====================================== */

    const archivedWeeks =
        Array.isArray(
            database.archivedWeeks
        )
            ? [
                ...database.archivedWeeks
            ]
            : [];


    archivedWeeks.sort(
        (a, b) =>
            String(
                a.weekId ||
                a.startDate ||
                ""
            ).localeCompare(
                String(
                    b.weekId ||
                    b.startDate ||
                    ""
                )
            )
    );


    archivedWeeks.forEach(
        (week, index) => {
            const dates =
                getArchivedWeekDates(
                    week
                );


            if (
                dates.length !== 7
            ) {
                return;
            }


            const startKey =
                dateKey(
                    dates[0]
                );

            const endKey =
                dateKey(
                    dates[6]
                );


            /*
                Older archives may not have
                totalProtein or totalFiber.

                We calculate directly from the
                archived food entries instead,
                which also keeps compatibility
                with old saved data.
            */

            const getDayNutrition =
                key =>
                    getArchivedDayNutrition(
                        week,
                        key
                    );


            /*
                Prefer the weight saved directly
                in the archive.

                For older archives without a
                saved week.weight, try weight
                history for that date range.
            */

            let weekWeight =
                Number(
                    week.weight
                ) || 0;


            if (
                weekWeight <= 0
            ) {
                weekWeight =
                    getLatestWeightForRange(
                        database,
                        startKey,
                        endKey,
                        0
                    );
            }


            const row =
                buildWeekExportRow({
                    label:
                        `Archived Week ${index + 1}`,

                    startDate:
                        dates[0]
                            .toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                }
                            ),

                    endDate:
                        dates[6]
                            .toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                }
                            ),

                    dates,

                    getDayNutrition,

                    weeklyTarget:
                        safeNumber(
                            week.target
                        ),

                    weekWeight
                });


            rows.push(
                row
            );
        }
    );


    /* ======================================
       CURRENT WEEK
    ====================================== */

    const currentDates =
        getWeekDates(
            new Date()
        );


    const currentStartKey =
        dateKey(
            currentDates[0]
        );

    const currentEndKey =
        dateKey(
            currentDates[6]
        );


    const currentWeight =
        getLatestWeightForRange(
            database,
            currentStartKey,
            currentEndKey,
            database.settings.currentWeight
        );


    const currentRow =
        buildWeekExportRow({
            label:
                "Current Week",

            startDate:
                currentDates[0]
                    .toLocaleDateString(
                        "en-US",
                        {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        }
                    ),

            endDate:
                currentDates[6]
                    .toLocaleDateString(
                        "en-US",
                        {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        }
                    ),

            dates:
                currentDates,

            getDayNutrition:
                key =>
                    getDailyNutrition(
                        database,
                        key
                    ),

            weeklyTarget:
                database.settings.weeklyTarget,

            weekWeight:
                currentWeight
        });


    rows.push(
        currentRow
    );


    /* ======================================
       CREATE WORKBOOK
    ====================================== */

    const workbook =
        XLSX.utils.book_new();


    /* ======================================
       WEEKLY NUTRITION SHEET
    ====================================== */

    const nutritionSheet =
        XLSX.utils.json_to_sheet(
            rows
        );


    setNutritionSheetWidths(
        nutritionSheet
    );


    XLSX.utils.book_append_sheet(
        workbook,
        nutritionSheet,
        "Weekly Nutrition"
    );


    /* ======================================
       WEIGHT HISTORY SHEET
    ====================================== */

    const weightRows =
        (
            database.weightHistory ||
            []
        ).map(
            entry => ({
                "Date":
                    entry.date,

                "Time":
                    entry.time || "",

                "Weight (kg)":
                    safeNumber(
                        entry.weight
                    )
            })
        );


    /*
        If no weight has ever been entered,
        create the sheet with headers anyway.
    */

    let weightSheet;


    if (
        weightRows.length > 0
    ) {
        weightSheet =
            XLSX.utils.json_to_sheet(
                weightRows
            );
    }

    else {
        weightSheet =
            XLSX.utils.aoa_to_sheet([
                [
                    "Date",
                    "Time",
                    "Weight (kg)"
                ]
            ]);
    }


    setWeightSheetWidths(
        weightSheet
    );


    XLSX.utils.book_append_sheet(
        workbook,
        weightSheet,
        "Weight History"
    );


    /* ======================================
       SAVE EXCEL FILE
    ====================================== */

    const filename =
        `Fitness_Tracker_${dateKey()}.xlsx`;


    XLSX.writeFile(
        workbook,
        filename
    );
}


/* ==========================================
   EXPORT BUTTON
========================================== */

if (exportBtn) {
    exportBtn.addEventListener(
        "click",
        exportToExcel
    );
}


/* ==========================================
   RENDER EVERYTHING
========================================== */

function renderAll() {
    renderHeader();

    renderDashboard();

    renderWeight();

    renderFoodLog();

    renderWorkout();

    renderWeek();

    updateResetButton();

    updateCalculator();
}


/* ==========================================
   INITIALIZE APP
========================================== */

function initializeApp() {
    /*
        Make sure today's storage object exists.

        This does NOT delete previous days.
        It simply prepares today's date if it
        does not exist yet.
    */

    const database =
        loadDatabase();

    ensureDay(
        database,
        dateKey()
    );

    saveDatabase(
        database
    );


    /* FOOD DROPDOWN */

    populateFoods();


    /* CALCULATOR STARTS HIDDEN */

    closeNutritionCalculator();


    /* INITIAL SCREEN */

    renderAll();
}


/* ==========================================
   DAILY DATE CHANGE CHECK
========================================== */

/*
    If the website stays open overnight,
    the app needs to notice that the calendar
    date has changed.

    Today's food will then automatically show
    the new date's empty log.

    Previous food entries remain saved for
    weekly totals and Excel export.
*/

let activeDateKey =
    dateKey();


function checkForDateChange() {
    const newDateKey =
        dateKey();


    if (
        newDateKey !==
        activeDateKey
    ) {
        activeDateKey =
            newDateKey;


        const database =
            loadDatabase();


        ensureDay(
            database,
            newDateKey
        );


        saveDatabase(
            database
        );


        renderAll();
    }


    /*
        Reset availability can also change
        when Saturday becomes Sunday or
        Sunday becomes Monday.
    */

    updateResetButton();
}


/* CHECK ONCE PER MINUTE */

setInterval(
    checkForDateChange,
    60000
);


/* ==========================================
   INITIAL START
========================================== */

initializeApp();
