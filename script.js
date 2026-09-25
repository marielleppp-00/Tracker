/* ==========================================
   FITNESS TRACKER
========================================== */

const STORAGE_KEY = "marielleFitnessTrackerV1";


/* ==========================================
   FOOD DATA
========================================== */

const foods = [
    {
        name: "Chicken Breast",
        serving: "150g cooked",
        calories: 296,
        protein: 45
    },
    {
        name: "Beef Osawa",
        serving: "120g cooked",
        calories: 435,
        protein: 41
    },
    {
        name: "Mixed Vegetables",
        serving: "165g cooked",
        calories: 115,
        protein: 3
    },
    {
        name: "Banana",
        serving: "1 banana",
        calories: 89,
        protein: null
    },
    {
        name: "Chia Seeds",
        serving: "28g / 2 tbsp",
        calories: 140,
        protein: 4
    },
    {
        name: "Rice",
        serving: "150g cooked",
        calories: 205,
        protein: 5
    },
    {
        name: "Wheat Bread",
        serving: "2 slices",
        calories: 161,
        protein: 7
    },
    {
        name: "Protein Shake",
        serving: "1 scoop",
        calories: 124,
        protein: 24
    },
    {
        name: "Duck Egg",
        serving: "1 egg",
        calories: 130,
        protein: 8
    },
    {
        name: "Kangkong",
        serving: "200g",
        calories: 50,
        protein: 4
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
   ELEMENT HELPERS
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
const addPresetBtn = $("addPresetBtn");

const customFoodName = $("customFoodName");
const caloriesPerServing = $("caloriesPerServing");
const servingAmount = $("servingAmount");
const calculatedCalories = $("calculatedCalories");
const addCalculatedBtn = $("addCalculatedBtn");

const quickFoodName = $("quickFoodName");
const quickCalories = $("quickCalories");
const quickAddBtn = $("quickAddBtn");

const foodLog = $("foodLog");
const todayLogTotal = $("todayLogTotal");

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

const archiveCount = $("archiveCount");
const exportBtn = $("exportBtn");

/* NEW ELEMENTS */

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
   DATE HELPERS
========================================== */

function dateKey(date = new Date()) {
    const year = date.getFullYear();

    const month =
        String(date.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(date.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function dateFromKey(key) {
    const parts =
        key.split("-").map(Number);

    return new Date(
        parts[0],
        parts[1] - 1,
        parts[2]
    );
}


function getMonday(date = new Date()) {
    const copy = new Date(date);

    copy.setHours(
        0,
        0,
        0,
        0
    );

    const day = copy.getDay();

    const difference =
        day === 0
            ? -6
            : 1 - day;

    copy.setDate(
        copy.getDate() + difference
    );

    return copy;
}


function addDays(date, amount) {
    const copy = new Date(date);

    copy.setDate(
        copy.getDate() + amount
    );

    return copy;
}


function getWeekDates(date = new Date()) {
    const monday = getMonday(date);

    const result = [];

    for (let i = 0; i < 7; i++) {
        result.push(
            addDays(monday, i)
        );
    }

    return result;
}


function getWeekId(date = new Date()) {
    return dateKey(
        getMonday(date)
    );
}


function formatDate(date) {
    return date.toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
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


function getEntriesForDate(
    database,
    key
) {
    return (
        database.days[key]
            ?.entries || []
    );
}


function getDailyTotal(
    database,
    key
) {
    return getEntriesForDate(
        database,
        key
    ).reduce(
        (sum, entry) =>
            sum +
            Number(entry.calories || 0),
        0
    );
}


/* ==========================================
   WEEK TOTAL
========================================== */

function getWeeklyTotal(
    database,
    date = new Date()
) {
    return getWeekDates(date)
        .reduce(
            (sum, day) =>
                sum +
                getDailyTotal(
                    database,
                    dateKey(day)
                ),
            0
        );
}


/* ==========================================
   ADD ENTRY
========================================== */

function addEntry(
    name,
    calories,
    source = "Manual"
) {
    const amount =
        Math.round(
            Number(calories)
        );

    if (
        !Number.isFinite(amount) ||
        amount <= 0
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
        .entries.push({
            id:
                Date.now() +
                Math.floor(
                    Math.random() * 1000
                ),

            name:
                name.trim() ||
                "Food",

            calories:
                amount,

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

    saveDatabase(database);

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

    database.days[key].entries =
        database.days[key]
            .entries
            .filter(
                entry =>
                    entry.id !== id
            );

    saveDatabase(database);

    renderAll();
}


/* ==========================================
   TARGETS
========================================== */

function saveDailyTarget() {
    const value =
        Math.round(
            Number(
                dailyTargetInput.value
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

    saveDatabase(database);

    dailyTargetInput.value = "";

    renderAll();
}


function saveWeeklyTarget() {
    const value =
        Math.round(
            Number(
                weeklyTargetInput.value
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

    saveDatabase(database);

    weeklyTargetInput.value = "";

    renderAll();
}


if (saveDailyTargetBtn) {
    saveDailyTargetBtn.addEventListener(
        "click",
        saveDailyTarget
    );
}


if (saveWeeklyTargetBtn) {
    saveWeeklyTargetBtn.addEventListener(
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
        Number(weightInput.value);

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

        weight:
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

    saveDatabase(database);

    weightInput.value = "";

    renderAll();
}


if (saveWeightBtn) {
    saveWeightBtn.addEventListener(
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
            dateFromKey(latest.date);

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

    /*
       Prevent duplicates if this function
       happens to run more than once.
    */

    const firstOption =
        foodSelect.querySelector(
            'option[value=""]'
        );

    foodSelect.innerHTML = "";

    if (firstOption) {
        foodSelect.appendChild(
            firstOption
        );
    }

    else {
        const placeholder =
            document.createElement(
                "option"
            );

        placeholder.value = "";
        placeholder.textContent =
            "Choose food";

        foodSelect.appendChild(
            placeholder
        );
    }

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
                if (foodInfo) {
                    foodInfo.classList
                        .add("hidden");
                }

                return;
            }

            const food =
                foods[
                    Number(
                        foodSelect.value
                    )
                ];

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

            if (foodInfo) {
                foodInfo.classList
                    .remove("hidden");
            }
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

            const total =
                food.calories *
                quantity;

            const name =
                quantity === 1
                    ? food.name
                    : `${food.name} × ${quantity}`;

            addEntry(
                name,
                total,
                "Preset"
            );

            foodQuantity.value =
                "1";
        }
    );
}


/* ==========================================
   CALCULATOR
========================================== */

function updateCalculator() {
    const calories =
        Number(
            caloriesPerServing?.value
        ) || 0;

    const servings =
        Number(
            servingAmount?.value
        ) || 0;

    const total =
        Math.max(
            0,
            calories * servings
        );

    if (calculatedCalories) {
        calculatedCalories.textContent =
            Math.round(total)
                .toLocaleString();
    }
}


if (caloriesPerServing) {
    caloriesPerServing.addEventListener(
        "input",
        updateCalculator
    );
}


if (servingAmount) {
    servingAmount.addEventListener(
        "input",
        updateCalculator
    );
}


if (addCalculatedBtn) {
    addCalculatedBtn.addEventListener(
        "click",
        () => {
            const calories =
                Number(
                    caloriesPerServing.value
                );

            const servings =
                Number(
                    servingAmount.value
                );

            const total =
                calories * servings;

            if (
                !Number.isFinite(total) ||
                total <= 0
            ) {
                alert(
                    "Enter calories and servings first."
                );

                return;
            }

            const name =
                customFoodName.value
                    .trim() ||
                "Other Food";

            addEntry(
                name,
                total,
                "Calculator"
            );

            customFoodName.value = "";
            caloriesPerServing.value = "";
            servingAmount.value = "";

            calculatedCalories.textContent =
                "0";
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
                Number(
                    quickCalories.value
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
                quickFoodName.value
                    .trim() ||
                "Quick Add";

            addEntry(
                name,
                calories,
                "Quick Add"
            );

            quickFoodName.value = "";
            quickCalories.value = "";
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
            `${dates[0].toLocaleDateString(
                "en-US",
                {
                    month: "short",
                    day: "numeric"
                }
            )} – ${
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

    const todayTotal =
        getDailyTotal(
            database,
            todayKey
        );

    const weekTotal =
        getWeeklyTotal(
            database
        );

    const dailyTarget =
        database.settings.dailyTarget;

    const weekTarget =
        database.settings.weeklyTarget;

    if (todayCalories) {
        todayCalories.textContent =
            todayTotal.toLocaleString();
    }

    if (weeklyCalories) {
        weeklyCalories.textContent =
            weekTotal.toLocaleString();
    }


    /* DAILY TARGET */

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


    /* WEEKLY TARGET */

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

    const entries =
        getEntriesForDate(
            database,
            dateKey()
        );

    foodLog.innerHTML = "";

    const total =
        entries.reduce(
            (sum, entry) =>
                sum +
                Number(
                    entry.calories || 0
                ),
            0
        );

    if (todayLogTotal) {
        todayLogTotal.textContent =
            `${total.toLocaleString()} kcal`;
    }

    if (entries.length === 0) {
        foodLog.innerHTML = `
            <div class="empty-state">
                Nothing added yet.
            </div>
        `;

        return;
    }

    entries.forEach(entry => {
        const row =
            document.createElement(
                "div"
            );

        row.className =
            "food-entry";

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
            entry.name;

        const meta =
            document.createElement(
                "div"
            );

        meta.className =
            "food-entry-meta";

        meta.textContent =
            `${entry.source} • ${entry.time}`;

        info.append(
            name,
            meta
        );

        const calories =
            document.createElement(
                "span"
            );

        calories.className =
            "food-entry-calories";

        calories.textContent =
            `${Number(
                entry.calories
            ).toLocaleString()} kcal`;

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

        deleteButton.addEventListener(
            "click",
            () =>
                deleteEntry(
                    entry.id
                )
        );

        row.append(
            info,
            calories,
            deleteButton
        );

        foodLog.appendChild(
            row
        );
    });
}

/* ==========================================
   WORKOUT
========================================== */

function renderWorkout() {

    if (!workoutContent) {
        return;
    }

    const now = new Date();

    const day = now.toLocaleDateString(
        "en-US",
        {
            weekday: "long"
        }
    );


    /* SHOW DAY */

    if (workoutDay) {
        workoutDay.textContent = day;
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

    const workout = workouts[day];


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


    /* CLEAR OLD CONTENT */

    workoutContent.innerHTML = "";


    /* ======================================
       WORKOUT TITLE
    ====================================== */

    const title =
        document.createElement("div");

    title.className =
        "workout-title";


    const titleText =
        document.createElement("h3");

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
                document.createElement("div");

            section.className =
                "workout-group";


            /* GROUP NAME */

            const heading =
                document.createElement("h4");

            heading.textContent =
                group.name;


            /* EXERCISES */

            const list =
                document.createElement("ul");


            group.exercises.forEach(
                exercise => {

                    const item =
                        document.createElement("li");

                    item.textContent =
                        exercise;

                    list.appendChild(
                        item
                    );

                }
            );


            /* SET GUIDE */

            const guide =
                document.createElement("div");

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


    /* LOAD TODAY'S WORKOUT */

    renderWorkout();


    /* SHOW POPUP */

    workoutModal.classList.add(
        "open"
    );


    workoutModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /* PREVENT BACKGROUND SCROLLING */

    document.body.style.overflow =
        "hidden";

}


function closeWorkoutModal() {

    if (!workoutModal) {
        return;
    }


    /* HIDE POPUP */

    workoutModal.classList.remove(
        "open"
    );


    workoutModal.setAttribute(
        "aria-hidden",
        "true"
    );


    /* ENABLE PAGE SCROLLING */

    document.body.style.overflow =
        "";

}


/* ==========================================
   VIEW WORKOUT BUTTON
========================================== */

if (showWorkoutBtn) {

    showWorkoutBtn.addEventListener(
        "click",
        openWorkoutModal
    );

}


/* ==========================================
   X CLOSE BUTTON
========================================== */

if (closeWorkoutBtn) {

    closeWorkoutBtn.addEventListener(
        "click",
        closeWorkoutModal
    );

}


/* ==========================================
   CLICK DARK BACKGROUND TO CLOSE
========================================== */

if (workoutModalBackdrop) {

    workoutModalBackdrop.addEventListener(
        "click",
        closeWorkoutModal
    );

}


/* ==========================================
   ESC KEY TO CLOSE
========================================== */

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

    if (weekDays) {
        weekDays.innerHTML = "";

        dates.forEach(
            (date, index) => {
                const key =
                    dateKey(date);

                const total =
                    getDailyTotal(
                        database,
                        key
                    );

                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "week-row";

                if (
                    key === todayKey
                ) {
                    row.classList.add(
                        "today-row"
                    );
                }

                const day =
                    document.createElement(
                        "strong"
                    );

                day.className =
                    "week-day";

                day.textContent =
                    labels[index];

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

                const calories =
                    document.createElement(
                        "strong"
                    );

                calories.className =
                    "week-calories";

                calories.textContent =
                    `${total.toLocaleString()} kcal`;

                row.append(
                    day,
                    dateLabel,
                    calories
                );

                weekDays.appendChild(
                    row
                );
            }
        );
    }

    const weekTotal =
        getWeeklyTotal(
            database
        );

    const target =
        database.settings.weeklyTarget;

    if (summaryConsumed) {
        summaryConsumed.textContent =
            `${weekTotal.toLocaleString()} kcal`;
    }

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

    if (isSunday) {
        resetWeekBtn.textContent =
            "Reset & Archive Week";

        if (resetMessage) {
            resetMessage.textContent =
                "Ready to archive and reset this week";
        }
    }

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

    if (now.getDay() !== 0) {
        alert(
            "Weekly reset is only available on Sunday."
        );

        return;
    }

    const confirmed =
        confirm(
            "Archive this week's calorie data and reset the current week?"
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

    const weekDaysData = {};

    let totalCalories = 0;

    dates.forEach(date => {
        const key =
            dateKey(date);

        /*
           Store every day in the archive,
           even if no food was logged.
        */

        const entries =
            getEntriesForDate(
                database,
                key
            );

        weekDaysData[key] = {
            entries:
                JSON.parse(
                    JSON.stringify(
                        entries
                    )
                )
        };

        totalCalories +=
            getDailyTotal(
                database,
                key
            );
    });

    const weeklyTarget =
        Number(
            database.settings
                .weeklyTarget
        ) || 0;

    const dailyTarget =
        Number(
            database.settings
                .dailyTarget
        ) || 0;

    const difference =
        weeklyTarget > 0
            ? totalCalories -
              weeklyTarget
            : null;

    const existingIndex =
        database.archivedWeeks
            .findIndex(
                week =>
                    week.weekId ===
                    weekId
            );

    const archivedWeek = {
        weekId,

        startDate:
            dateKey(monday),

        endDate:
            dateKey(sunday),

        dailyTarget,

        target:
            weeklyTarget,

        totalCalories,

        difference,

        days:
            weekDaysData
    };

    /*
       If the same week was somehow
       archived before, update it instead
       of creating a duplicate.
    */

    if (existingIndex >= 0) {
        database.archivedWeeks[
            existingIndex
        ] = archivedWeek;
    }

    else {
        database.archivedWeeks.push(
            archivedWeek
        );
    }

    database.archivedWeeks.sort(
        (a, b) =>
            a.weekId.localeCompare(
                b.weekId
            )
    );

    /*
       Delete only this week's calorie
       entries.

       Targets, weight and weight history
       are NOT deleted.
    */

    dates.forEach(date => {
        delete database.days[
            dateKey(date)
        ];
    });

    saveDatabase(database);

    renderAll();

    alert(
        "Week archived successfully. Your calorie log has been reset."
    );
}


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
    if (!target) {
        return "No target";
    }

    const difference =
        consumed -
        target;

    if (difference < 0) {
        return `${Math.abs(
            difference
        )} kcal Under`;
    }

    if (difference > 0) {
        return `${difference} kcal Over`;
    }

    return "Target Reached";
}


function calculateDaysTotal(
    daysObject
) {
    let total = 0;

    Object.keys(
        daysObject || {}
    ).forEach(key => {
        const entries =
            daysObject[key]
                ?.entries || [];

        entries.forEach(
            entry => {
                total +=
                    Number(
                        entry.calories ||
                        0
                    );
            }
        );
    });

    return total;
}


/* ==========================================
   EXPORT TO EXCEL
========================================== */

/* ==========================================
   EXPORT TO EXCEL
========================================== */

function exportToExcel() {

    if (typeof XLSX === "undefined") {

        alert(
            "Excel export could not load. Check your internet connection and try again."
        );

        return;
    }


    const database =
        loadDatabase();


    const workbook =
        XLSX.utils.book_new();


    /* ======================================
       CALORIE TRACKER
    ====================================== */

    const calorieRows = [
        [
            "Week",
            "Date",
            "Calories Intake",
            "Calories Goal for the Week",
            "Calories Difference"
        ]
    ];


    /* ======================================
       ADD A WEEK TO EXCEL
    ====================================== */

    function addWeek(
        weekId,
        daysObject,
        weeklyTarget
    ) {

        const target =
            Number(weeklyTarget) || 0;


        /*
            Get every date that actually
            contains calorie entries.
        */

        const dates =
            Object.keys(
                daysObject || {}
            )
                .filter(key => {

                    const entries =
                        daysObject[key]
                            ?.entries || [];

                    return entries.length > 0;

                })
                .sort();


        let runningCalories = 0;


        dates.forEach(key => {

            const entries =
                daysObject[key]
                    ?.entries || [];


            const dailyCalories =
                entries.reduce(
                    (sum, entry) => {

                        return (
                            sum +
                            Number(
                                entry.calories || 0
                            )
                        );

                    },
                    0
                );


            /*
                Calories Intake is cumulative
                for the week.

                Example:

                Monday = 1500
                Tuesday = 1700

                Monday Excel = 1500
                Tuesday Excel = 3200
            */

            runningCalories +=
                dailyCalories;


            const difference =
                target > 0
                    ? runningCalories - target
                    : "";


            calorieRows.push([
                weekId,
                key,
                runningCalories,
                target || "",
                difference
            ]);

        });

    }


    /* ======================================
       ARCHIVED WEEKS
    ====================================== */

    database.archivedWeeks
        .forEach(
            week => {

                addWeek(
                    week.weekId,
                    week.days || {},
                    week.target
                );

            }
        );


    /* ======================================
       CURRENT WEEK
    ====================================== */

    const currentWeekId =
        getWeekId();


    const currentWeekDays = {};


    Object.keys(
        database.days || {}
    ).forEach(key => {

        const date =
            dateFromKey(key);


        if (
            getWeekId(date) ===
            currentWeekId
        ) {

            currentWeekDays[key] =
                database.days[key];

        }

    });


    addWeek(
        currentWeekId,
        currentWeekDays,
        database.settings.weeklyTarget
    );


    /* ======================================
       CREATE CALORIE SHEET
    ====================================== */

    const calorieSheet =
        XLSX.utils.aoa_to_sheet(
            calorieRows
        );


    calorieSheet["!cols"] = [
        { wch: 15 },
        { wch: 15 },
        { wch: 20 },
        { wch: 28 },
        { wch: 22 }
    ];


    XLSX.utils.book_append_sheet(
        workbook,
        calorieSheet,
        "Calorie Tracker"
    );


    /* ======================================
       WEIGHT HISTORY
    ====================================== */

    const weightRows = [
        [
            "Date",
            "Weight (kg)",
            "Change (kg)",
            "Time"
        ]
    ];


    database.weightHistory
        .forEach(
            (entry, index) => {

                let change = "";


                if (index > 0) {

                    const previous =
                        Number(
                            database
                                .weightHistory[
                                    index - 1
                                ].weight
                        );


                    change =
                        Number(
                            (
                                Number(
                                    entry.weight
                                ) -
                                previous
                            ).toFixed(1)
                        );

                }


                weightRows.push([
                    entry.date,
                    Number(entry.weight),
                    change,
                    entry.time || ""
                ]);

            }
        );


    const weightSheet =
        XLSX.utils.aoa_to_sheet(
            weightRows
        );


    weightSheet["!cols"] = [
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 }
    ];


    XLSX.utils.book_append_sheet(
        workbook,
        weightSheet,
        "Weight History"
    );


    /* ======================================
       DOWNLOAD
    ====================================== */

    const filename =
        `Fitness_Tracker_${dateKey()}.xlsx`;


    XLSX.writeFile(
        workbook,
        filename
    );

}

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

    renderFoodLog();

    renderWorkout();

    renderWeek();

    renderWeight();

    updateResetButton();
}


/* ==========================================
   AUTO DATE REFRESH
========================================== */

/*
   If the website is left open overnight,
   this checks periodically so the displayed
   day/date and Sunday reset availability
   update without requiring a refresh.
*/

let lastRenderedDate =
    dateKey();

setInterval(
    () => {
        const newDate =
            dateKey();

        if (
            newDate !==
            lastRenderedDate
        ) {
            lastRenderedDate =
                newDate;

            renderAll();
        }

        else {
            updateResetButton();
        }
    },

    60 * 1000
);


/* ==========================================
   START
========================================== */

populateFoods();

renderAll();