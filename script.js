const animals = [
    {
        image: 'assets/animals/singa.jpg',
        name: 'Singa',
        options: ['Singa', 'Harimau', 'Gajah', 'Jerapah'],
        characteristics: ['Dijuluki raja hutan', 'Memiliki surai', 'Hidup berkelompok', 'Pemakan daging']
    },
    {
        image: 'assets/animals/gajah.jpg',
        name: 'Gajah',
        options: ['Gajah', 'Badak', 'Kuda Nil', 'Kerbau'],
        characteristics: ['Memiliki belalai panjang', 'Tubuh sangat besar', 'Memiliki gading', 'Hidup berkelompok']
    },
    {
        image: 'assets/animals/jerapah.jpg',
        name: 'Jerapah',
        options: ['Jerapah', 'Unta', 'Zebra', 'Rusa'],
        characteristics: ['Leher sangat panjang', 'Memiliki bintik-bintik', 'Hewan tertinggi', 'Pemakan daun']
    },
    {
        image: 'assets/animals/harimau.jpg',
        name: 'Harimau',
        options: ['Harimau', 'Singa', 'Cheetah', 'Jaguar'],
        characteristics: ['Memiliki loreng', 'Pemakan daging', 'Hidup di hutan', 'Hewan soliter']
    },
    {
        image: 'assets/animals/monyet.jpg',
        name: 'Monyet',
        options: ['Monyet', 'Orangutan', 'Gorila', 'Simpanse'],
        characteristics: ['Suka memanjat pohon', 'Memiliki ekor panjang', 'Pemakan buah', 'Hidup berkelompok']
    },
    {
        image: 'assets/animals/zebra.jpg',
        name: 'Zebra',
        options: ['Zebra', 'Kuda', 'Jerapah', 'Rusa'],
        characteristics: ['Memiliki belang hitam putih', 'Hidup di padang rumput', 'Hidup berkelompok', 'Pemakan rumput']
    },
    {
        image: 'assets/animals/kuda_nil.jpg',
        name: 'Kuda Nil',
        options: ['Kuda Nil', 'Gajah', 'Badak', 'Kerbau'],
        characteristics: ['Tubuh besar', 'Hidup di air', 'Mulut sangat lebar', 'Pemakan tumbuhan']
    },
    {
        image: 'assets/animals/kanguru.jpg',
        name: 'Kanguru',
        options: ['Kanguru', 'Koala', 'Beruang', 'Panda'],
        characteristics: ['Memiliki kantong', 'Melompat dengan kaki belakang', 'Hidup di Australia', 'Pemakan tumbuhan']
    },
    {
        image: 'assets/animals/panda.jpg',
        name: 'Panda',
        options: ['Panda', 'Beruang', 'Koala', 'Kanguru'],
        characteristics: ['Warna hitam putih', 'Pemakan bambu', 'Hidup di hutan bambu', 'Hewan langka']
    },
    {
        image: 'assets/animals/koala.jpg',
        name: 'Koala',
        options: ['Koala', 'Panda', 'Beruang', 'Kanguru'],
        characteristics: ['Suka tidur di pohon', 'Pemakan daun eukaliptus', 'Hidup di Australia', 'Memiliki telinga bulat']
    }
];

const infinityAnimals = [
    {
        name: 'Singa',
        characteristics: ['Dijuluki raja hutan', 'Memiliki surai', 'Hidup berkelompok', 'Pemakan daging']
    },
    {
        name: 'Gajah',
        characteristics: ['Memiliki belalai panjang', 'Tubuh sangat besar', 'Memiliki gading', 'Hidup berkelompok']
    },
    {
        name: 'Jerapah',
        characteristics: ['Leher sangat panjang', 'Memiliki bintik-bintik', 'Hewan tertinggi', 'Pemakan daun']
    },
    {
        name: 'Harimau',
        characteristics: ['Memiliki loreng', 'Pemakan daging', 'Hidup di hutan', 'Hewan soliter']
    },
    {
        name: 'Monyet',
        characteristics: ['Suka memanjat pohon', 'Memiliki ekor panjang', 'Pemakan buah', 'Hidup berkelompok']
    },
    {
        name: 'Zebra',
        characteristics: ['Memiliki belang hitam putih', 'Hidup di padang rumput', 'Hidup berkelompok', 'Pemakan rumput']
    },
    {
        name: 'Kuda Nil',
        characteristics: ['Tubuh besar', 'Hidup di air', 'Mulut sangat lebar', 'Pemakan tumbuhan']
    },
    {
        name: 'Kanguru',
        characteristics: ['Memiliki kantong', 'Melompat dengan kaki belakang', 'Hidup di Australia', 'Pemakan tumbuhan']
    },
    {
        name: 'Panda',
        characteristics: ['Warna hitam putih', 'Pemakan bambu', 'Hidup di hutan bambu', 'Hewan langka']
    },
    {
        name: 'Koala',
        characteristics: ['Suka tidur di pohon', 'Pemakan daun eukaliptus', 'Hidup di Australia', 'Memiliki telinga bulat']
    },
    {
        name: 'Kuda',
        characteristics: ['Memiliki surai', 'Berkaki empat', 'Dapat berlari cepat', 'Pemakan rumput']
    },
    {
        name: 'Sapi',
        characteristics: ['Memiliki tanduk', 'Pemakan rumput', 'Memberikan susu', 'Hidup berkelompok']
    },
    {
        name: 'Kambing',
        characteristics: ['Memiliki tanduk', 'Pemakan rumput', 'Memiliki janggut', 'Hidup berkelompok']
    },
    {
        name: 'Domba',
        characteristics: ['Bulu tebal', 'Pemakan rumput', 'Hidup berkelompok', 'Memberikan wol']
    },
    {
        name: 'Ayam',
        characteristics: ['Memiliki sayap', 'Berkokok di pagi hari', 'Bertelur', 'Pemakan biji-bijian']
    },
    {
        name: 'Bebek',
        characteristics: ['Memiliki paruh pipih', 'Bisa berenang', 'Bertelur', 'Pemakan ikan kecil']
    },
    {
        name: 'Angsa',
        characteristics: ['Leher panjang', 'Bisa berenang', 'Bulu putih', 'Pemakan tumbuhan air']
    },
    {
        name: 'Merpati',
        characteristics: ['Bisa terbang', 'Memiliki paruh kecil', 'Hidup berpasangan', 'Pemakan biji-bijian']
    },
    {
        name: 'Elang',
        characteristics: ['Bisa terbang tinggi', 'Memiliki cakar tajam', 'Pemakan daging', 'Penglihatan tajam']
    },
    {
        name: 'Burung Hantu',
        characteristics: ['Aktif di malam hari', 'Mata besar', 'Bisa memutar kepala', 'Pemakan tikus']
    },
    {
        name: 'Kucing',
        characteristics: ['Memiliki kumis', 'Bisa memanjat', 'Pemakan daging', 'Hewan peliharaan']
    },
    {
        name: 'Anjing',
        characteristics: ['Hewan setia', 'Pemakan daging', 'Bisa menggonggong', 'Hewan peliharaan']
    },
    {
        name: 'Kelinci',
        characteristics: ['Telinga panjang', 'Pemakan wortel', 'Melompat', 'Hewan peliharaan']
    },
    {
        name: 'Tikus',
        characteristics: ['Tubuh kecil', 'Memiliki ekor panjang', 'Pemakan apa saja', 'Hidup di lubang']
    },
    {
        name: 'Ular',
        characteristics: ['Tidak berkaki', 'Bisa melilit', 'Pemakan daging', 'Bisa berbisa']
    },
    {
        name: 'Buaya',
        characteristics: ['Hidup di air', 'Memiliki kulit keras', 'Pemakan daging', 'Gigi tajam']
    },
    {
        name: 'Kura-kura',
        characteristics: ['Memiliki tempurung', 'Bergerak lambat', 'Hidup di air dan darat', 'Pemakan tumbuhan']
    },
    {
        name: 'Katak',
        characteristics: ['Bisa melompat', 'Hidup di air dan darat', 'Bisa berenang', 'Pemakan serangga']
    },
    {
        name: 'Kodok',
        characteristics: ['Kulit kasar', 'Bisa melompat', 'Hidup di air dan darat', 'Pemakan serangga']
    },
    {
        name: 'Ikan',
        characteristics: ['Hidup di air', 'Bisa berenang', 'Memiliki sirip', 'Bernapas dengan insang']
    },
    {
        name: 'Hiu',
        characteristics: ['Pemakan daging', 'Gigi tajam', 'Hidup di laut', 'Berenang cepat']
    },
    {
        name: 'Paus',
        characteristics: ['Tubuh sangat besar', 'Hidup di laut', 'Pemakan plankton', 'Mamalia laut']
    },
    {
        name: 'Lumba-lumba',
        characteristics: ['Cerdas', 'Hidup di laut', 'Bisa melompat', 'Mamalia laut']
    },
    {
        name: 'Gurita',
        characteristics: ['Memiliki 8 tentakel', 'Hidup di laut', 'Bisa menyemprot tinta', 'Pemakan daging']
    },
    {
        name: 'Ubur-ubur',
        characteristics: ['Bentuk seperti payung', 'Hidup di laut', 'Bisa menyengat', 'Tubuh transparan']
    },
    {
        name: 'Bintang Laut',
        characteristics: ['Bentuk seperti bintang', 'Hidup di laut', 'Memiliki 5 lengan', 'Bergerak lambat']
    },
    {
        name: 'Kepiting',
        characteristics: ['Memiliki capit', 'Hidup di laut', 'Bergerak menyamping', 'Pemakan daging']
    },
    {
        name: 'Udang',
        characteristics: ['Tubuh kecil', 'Hidup di laut', 'Memiliki antena', 'Pemakan plankton']
    },
    {
        name: 'Lobster',
        characteristics: ['Memiliki capit besar', 'Hidup di laut', 'Tubuh berwarna merah', 'Pemakan daging']
    },
    {
        name: 'Kupu-kupu',
        characteristics: ['Memiliki sayap indah', 'Metamorfosis', 'Pemakan nektar', 'Bisa terbang']
    },
    {
        name: 'Lebah',
        characteristics: ['Memiliki sengat', 'Pembuat madu', 'Hidup berkoloni', 'Pemakan nektar']
    },
    {
        name: 'Semut',
        characteristics: ['Hidup berkoloni', 'Tubuh kecil', 'Pekerja keras', 'Pemakan apa saja']
    },
    {
        name: 'Laba-laba',
        characteristics: ['Memiliki 8 kaki', 'Bisa membuat jaring', 'Pemakan serangga', 'Bisa berbisa']
    },
    {
        name: 'Kumbang',
        characteristics: ['Memiliki sayap keras', 'Tubuh kecil', 'Pemakan tumbuhan', 'Bisa terbang']
    },
    {
        name: 'Jangkrik',
        characteristics: ['Bisa mengeluarkan suara', 'Pemakan tumbuhan', 'Bisa melompat', 'Hidup di tanah']
    },
    {
        name: 'Belalang',
        characteristics: ['Bisa melompat jauh', 'Pemakan tumbuhan', 'Memiliki sayap', 'Warna hijau']
    },
    {
        name: 'Capung',
        characteristics: ['Bisa terbang cepat', 'Memiliki sayap transparan', 'Pemakan serangga', 'Mata besar']
    },
    {
        name: 'Nyamuk',
        characteristics: ['Tubuh kecil', 'Bisa terbang', 'Mengisap darah', 'Mengeluarkan suara berdengung']
    },
    {
        name: 'Lalat',
        characteristics: ['Bisa terbang', 'Mata majemuk', 'Pemakan sampah', 'Mengeluarkan suara berdengung']
    },
    {
        name: 'Kecoak',
        characteristics: ['Tubuh datar', 'Bisa berlari cepat', 'Hidup di tempat gelap', 'Pemakan sampah']
    },
    {
        name: 'Rayap',
        characteristics: ['Hidup berkoloni', 'Pemakan kayu', 'Tubuh kecil', 'Hidup di dalam tanah']
    }
];

const mediumQuestions = [
    {
        story: "Di hutan Afrika, ada seekor hewan yang dijuluki 'Raja Hutan'. Hewan ini memiliki surai yang indah dan hidup berkelompok. Hewan apakah ini?",
        answer: "Singa",
        options: ["Singa", "Harimau", "Gajah", "Jerapah"]
    },
    {
        story: "Hewan ini memiliki belalai panjang dan gading yang kuat. Tubuhnya sangat besar dan hidup berkelompok. Hewan apakah ini?",
        answer: "Gajah",
        options: ["Gajah", "Badak", "Kuda Nil", "Kerbau"]
    },
    {
        story: "Hewan ini memiliki leher yang sangat panjang dan bintik-bintik di tubuhnya. Ia adalah hewan tertinggi di dunia. Hewan apakah ini?",
        answer: "Jerapah",
        options: ["Jerapah", "Unta", "Zebra", "Rusa"]
    },
    {
        story: "Hewan ini memiliki loreng di tubuhnya dan hidup di hutan. Ia adalah pemakan daging dan hidup soliter. Hewan apakah ini?",
        answer: "Harimau",
        options: ["Harimau", "Singa", "Cheetah", "Jaguar"]
    },
    {
        story: "Hewan ini suka memanjat pohon dan memiliki ekor panjang. Ia hidup berkelompok dan pemakan buah. Hewan apakah ini?",
        answer: "Monyet",
        options: ["Monyet", "Orangutan", "Gorila", "Simpanse"]
    },
    {
        story: "Hewan ini memiliki belang hitam putih di tubuhnya. Ia hidup di padang rumput dan berkelompok. Hewan apakah ini?",
        answer: "Zebra",
        options: ["Zebra", "Kuda", "Jerapah", "Rusa"]
    },
    {
        story: "Hewan ini memiliki tubuh besar dan hidup di air. Mulutnya sangat lebar dan pemakan tumbuhan. Hewan apakah ini?",
        answer: "Kuda Nil",
        options: ["Kuda Nil", "Gajah", "Badak", "Kerbau"]
    },
    {
        story: "Hewan ini memiliki kantong di perutnya dan melompat dengan kaki belakang. Ia hidup di Australia. Hewan apakah ini?",
        answer: "Kanguru",
        options: ["Kanguru", "Koala", "Beruang", "Panda"]
    },
    {
        story: "Hewan ini berwarna hitam putih dan pemakan bambu. Ia hidup di hutan bambu dan termasuk hewan langka. Hewan apakah ini?",
        answer: "Panda",
        options: ["Panda", "Beruang", "Koala", "Kanguru"]
    },
    {
        story: "Hewan ini suka tidur di pohon dan pemakan daun eukaliptus. Ia hidup di Australia dan memiliki telinga bulat. Hewan apakah ini?",
        answer: "Koala",
        options: ["Koala", "Panda", "Beruang", "Kanguru"]
    },
    {
        story: "Hewan ini memiliki surai dan berkaki empat. Ia dapat berlari dengan cepat dan pemakan rumput. Hewan apakah ini?",
        answer: "Kuda",
        options: ["Kuda", "Zebra", "Jerapah", "Rusa"]
    },
    {
        story: "Hewan ini memiliki tanduk dan pemakan rumput. Ia memberikan susu dan hidup berkelompok. Hewan apakah ini?",
        answer: "Sapi",
        options: ["Sapi", "Kerbau", "Kambing", "Domba"]
    },
    {
        story: "Hewan ini memiliki tanduk dan janggut. Ia pemakan rumput dan hidup berkelompok. Hewan apakah ini?",
        answer: "Kambing",
        options: ["Kambing", "Sapi", "Kerbau", "Domba"]
    },
    {
        story: "Hewan ini memiliki bulu tebal dan pemakan rumput. Ia hidup berkelompok dan memberikan wol. Hewan apakah ini?",
        answer: "Domba",
        options: ["Domba", "Sapi", "Kambing", "Kerbau"]
    },
    {
        story: "Hewan ini memiliki sayap dan berkokok di pagi hari. Ia bertelur dan pemakan biji-bijian. Hewan apakah ini?",
        answer: "Ayam",
        options: ["Ayam", "Bebek", "Angsa", "Merpati"]
    },
    {
        story: "Hewan ini memiliki paruh pipih dan bisa berenang. Ia bertelur dan pemakan ikan kecil. Hewan apakah ini?",
        answer: "Bebek",
        options: ["Bebek", "Ayam", "Angsa", "Merpati"]
    },
    {
        story: "Hewan ini memiliki leher panjang dan bisa berenang. Bulunya putih dan pemakan tumbuhan air. Hewan apakah ini?",
        answer: "Angsa",
        options: ["Angsa", "Bebek", "Ayam", "Merpati"]
    },
    {
        story: "Hewan ini bisa terbang dan memiliki paruh kecil. Ia hidup berpasangan dan pemakan biji-bijian. Hewan apakah ini?",
        answer: "Merpati",
        options: ["Merpati", "Elang", "Burung Hantu", "Capung"]
    },
    {
        story: "Hewan ini bisa terbang tinggi dan memiliki cakar tajam. Ia pemakan daging dan memiliki penglihatan tajam. Hewan apakah ini?",
        answer: "Elang",
        options: ["Elang", "Burung Hantu", "Merpati", "Capung"]
    },
    {
        story: "Hewan ini aktif di malam hari dan memiliki mata besar. Ia bisa memutar kepala dan pemakan tikus. Hewan apakah ini?",
        answer: "Burung Hantu",
        options: ["Burung Hantu", "Elang", "Merpati", "Capung"]
    },
    {
        story: "Hewan ini memiliki kumis dan bisa memanjat. Ia pemakan daging dan hewan peliharaan. Hewan apakah ini?",
        answer: "Kucing",
        options: ["Kucing", "Anjing", "Kelinci", "Tikus"]
    },
    {
        story: "Hewan ini dikenal setia dan pemakan daging. Ia bisa menggonggong dan hewan peliharaan. Hewan apakah ini?",
        answer: "Anjing",
        options: ["Anjing", "Kucing", "Kelinci", "Tikus"]
    },
    {
        story: "Hewan ini memiliki telinga panjang dan pemakan wortel. Ia bisa melompat dan hewan peliharaan. Hewan apakah ini?",
        answer: "Kelinci",
        options: ["Kelinci", "Kucing", "Anjing", "Tikus"]
    },
    {
        story: "Hewan ini memiliki tubuh kecil dan ekor panjang. Ia pemakan apa saja dan hidup di lubang. Hewan apakah ini?",
        answer: "Tikus",
        options: ["Tikus", "Kelinci", "Kucing", "Anjing"]
    },
    {
        story: "Hewan ini tidak berkaki dan bisa melilit. Ia pemakan daging dan bisa berbisa. Hewan apakah ini?",
        answer: "Ular",
        options: ["Ular", "Buaya", "Kura-kura", "Katak"]
    }
];

const hardQuestions = [
    // ... 50 questions similar to medium questions but with more challenging options ...
];

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let currentLevel = 1;
let shuffledQuestions = [];
let currentMode = 'easy';
let wrongAttempts = 0;

let levelStars = {
    medium: {},
    hard: {}
};

// Audio elements
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.log('Error playing sound:', error);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateStars() {
    const stars = document.querySelectorAll('.stars-container i');
    const correctPercentage = (correctAnswers / totalQuestions) * 100;
    
    stars.forEach((star, index) => {
        star.classList.remove('active');
    });

    if (correctPercentage >= 80) {
        // 3 stars for 80% or more correct
        stars[0].classList.add('active');
        stars[1].classList.add('active');
        stars[2].classList.add('active');
    } else if (correctPercentage >= 50) {
        // 2 stars for 50% or more correct
        stars[0].classList.add('active');
        stars[1].classList.add('active');
    } else {
        // 1 star for less than 50% correct
        stars[0].classList.add('active');
    }
}

function checkAchievements() {
    if (correctAnswers >= 10) {
        const achievement = document.getElementById('achievement-10');
        achievement.classList.add('unlocked');
    }
}

function goToHome() {
    document.getElementById('home-page').classList.add('active');
    document.getElementById('game-page').classList.remove('active');
}

function startGame(mode) {
    currentMode = mode;
    currentLevel = 1;
    wrongAttempts = 0;
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('game-page').classList.add('active');
    resetGame();
    loadLevel();
}

function resetGame() {
    score = 0;
    correctAnswers = 0;
    totalQuestions = 0;
    wrongAttempts = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('total-questions').textContent = '0';
    document.getElementById('current-level').textContent = currentLevel;
    document.querySelectorAll('.stars-container i').forEach(star => {
        star.classList.remove('active');
    });
    document.getElementById('achievement-10').classList.remove('unlocked');
}

function loadLevel() {
    if (currentMode === 'infinity') {
        shuffledQuestions = shuffleArray([...infinityAnimals]);
        currentQuestion = 0;
        totalQuestions = shuffledQuestions.length;
        document.getElementById('total-questions').textContent = '∞';
        document.getElementById('correct-count').textContent = '0';
        loadQuestion();
    } else if (currentMode === 'medium') {
        const questionsPerLevel = 5;
        const startIndex = (currentLevel - 1) * questionsPerLevel;
        shuffledQuestions = shuffleArray([...mediumQuestions]).slice(startIndex, startIndex + questionsPerLevel);
        currentQuestion = 0;
        totalQuestions = shuffledQuestions.length;
        document.getElementById('total-questions').textContent = totalQuestions;
        document.getElementById('correct-count').textContent = '0';
        loadQuestion();
    } else if (currentMode === 'hard') {
        const questionsPerLevel = 5;
        const startIndex = (currentLevel - 1) * questionsPerLevel;
        shuffledQuestions = shuffleArray([...hardQuestions]).slice(startIndex, startIndex + questionsPerLevel);
        currentQuestion = 0;
        totalQuestions = shuffledQuestions.length;
        document.getElementById('total-questions').textContent = totalQuestions;
        document.getElementById('correct-count').textContent = '0';
        loadQuestion();
    } else {
        // Determine number of questions based on level
        let questionsPerLevel;
        switch(currentLevel) {
            case 1:
                questionsPerLevel = 3;
                break;
            case 2:
                questionsPerLevel = 3;
                break;
            case 3:
                questionsPerLevel = 4;
                break;
            default:
                questionsPerLevel = 3;
        }

        shuffledQuestions = shuffleArray([...animals]).slice(0, questionsPerLevel);
        currentQuestion = 0;
        totalQuestions = shuffledQuestions.length;
        document.getElementById('total-questions').textContent = totalQuestions;
        document.getElementById('correct-count').textContent = '0';
        loadQuestion();
    }
}

function loadQuestion() {
    if (currentMode === 'infinity') {
        if (currentQuestion >= shuffledQuestions.length) {
            shuffledQuestions = shuffleArray([...infinityAnimals]);
            currentQuestion = 0;
        }

        const question = shuffledQuestions[currentQuestion];
        document.getElementById('image-container').classList.add('hidden');
        document.getElementById('characteristics-container').classList.add('active');
        
        // Show characteristics
        const characteristics = question.characteristics;
        let message = 'Ciri-ciri hewan ini:\n';
        characteristics.forEach((char, index) => {
            message += `${index + 1}. ${char}\n`;
        });
        document.getElementById('message').textContent = message;
        
        // Get options
        let options = [];
        options.push(question.name);
        while (options.length < 4) {
            const randomAnimal = infinityAnimals[Math.floor(Math.random() * infinityAnimals.length)];
            if (!options.includes(randomAnimal.name)) {
                options.push(randomAnimal.name);
            }
        }
        
        options = shuffleArray(options);
        const buttons = document.querySelectorAll('.option-btn');
        
        buttons.forEach((button, index) => {
            button.textContent = options[index];
            button.disabled = false;
            button.className = 'option-btn';
        });

        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('retry-btn').classList.add('hidden');
        document.getElementById('next-level-btn').classList.add('hidden');
    } else if (currentMode === 'medium' || currentMode === 'hard') {
        if (currentQuestion >= shuffledQuestions.length) {
            endLevel();
            return;
        }

        const question = shuffledQuestions[currentQuestion];
        document.getElementById('image-container').classList.add('hidden');
        document.getElementById('characteristics-container').classList.add('active');
        
        document.getElementById('message').textContent = question.story;
        
        const buttons = document.querySelectorAll('.option-btn');
        const options = shuffleArray([...question.options]);
        
        buttons.forEach((button, index) => {
            button.textContent = options[index];
            button.disabled = false;
            button.className = 'option-btn';
        });

        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('retry-btn').classList.add('hidden');
        document.getElementById('next-level-btn').classList.add('hidden');
    } else {
        if (currentQuestion >= shuffledQuestions.length) {
            endLevel();
            return;
        }

        const question = shuffledQuestions[currentQuestion];
        document.getElementById('animal-image').src = question.image;
        document.getElementById('image-container').classList.remove('hidden');
        document.getElementById('characteristics-container').classList.remove('active');
        
        let options = [...question.options];
        
        if (currentMode === 'easy') {
            options = options.filter(opt => opt !== question.name).slice(0, 3);
            options.push(question.name);
        } else if (currentMode === 'hard') {
            const similarAnimals = {
                'Singa': ['Harimau', 'Cheetah', 'Jaguar'],
                'Gajah': ['Badak', 'Kuda Nil', 'Kerbau'],
                'Jerapah': ['Unta', 'Zebra', 'Rusa'],
                'Monyet': ['Orangutan', 'Gorila', 'Simpanse'],
                'Panda': ['Beruang', 'Koala', 'Kanguru']
            };
            
            if (similarAnimals[question.name]) {
                options = similarAnimals[question.name].slice(0, 3);
                options.push(question.name);
            }
        }
        
        options = shuffleArray(options);
        const buttons = document.querySelectorAll('.option-btn');
        
        buttons.forEach((button, index) => {
            button.textContent = options[index];
            button.disabled = false;
            button.className = 'option-btn';
        });

        document.getElementById('message').textContent = '';
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('retry-btn').classList.add('hidden');
        document.getElementById('next-level-btn').classList.add('hidden');
    }
}

function checkAnswer(selectedIndex) {
    const question = currentMode === 'infinity' ? shuffledQuestions[currentQuestion] : 
                    (currentMode === 'medium' || currentMode === 'hard') ? shuffledQuestions[currentQuestion] : 
                    shuffledQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const selectedAnswer = buttons[selectedIndex].textContent;
    const correctAnswer = currentMode === 'medium' || currentMode === 'hard' ? question.answer : question.name;
    
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });

    if (selectedAnswer === correctAnswer) {
        score += 10;
        correctAnswers++;
        wrongAttempts = 0;
        document.getElementById('score').textContent = score;
        document.getElementById('correct-count').textContent = correctAnswers;
        document.getElementById('message').textContent = 'Selamat! Jawabanmu benar! 🎉';
        document.getElementById('message').style.color = '#2ecc71';
        playSound(correctSound);
        checkAchievements();
        
        if (currentMode === 'infinity') {
            currentQuestion++;
            loadQuestion();
        }
    } else {
        wrongAttempts++;
        document.getElementById('message').textContent = `Ups! Jawabanmu kurang tepat. Coba lagi! (Kesalahan: ${wrongAttempts}/3)`;
        document.getElementById('message').style.color = '#e74c3c';
        playSound(incorrectSound);
        
        if (wrongAttempts >= 3) {
            document.getElementById('message').textContent = 'Kamu sudah salah 3 kali! Ayo mulai dari awal...';
            setTimeout(() => {
                startGame(currentMode);
            }, 2000);
        }
    }
}

function nextQuestion() {
    const buttons = document.querySelectorAll('.option-btn');
    const isAnswered = Array.from(buttons).some(button => 
        button.classList.contains('correct') || button.classList.contains('incorrect')
    );
    
    if (!isAnswered) {
        const messageElement = document.getElementById('message');
        const characteristicsContainer = document.getElementById('characteristics-container');
        
        characteristicsContainer.classList.add('active');
        characteristicsContainer.style.display = 'block';
        
        messageElement.textContent = 'Pilih jawabanmu terlebih dahulu ya! 😊';
        messageElement.style.color = '#e74c3c';
        messageElement.style.animation = 'shake 0.5s';
        
        setTimeout(() => {
            messageElement.style.animation = '';
        }, 500);
        return;
    }
    
    if (currentMode === 'infinity') {
        currentQuestion++;
        loadQuestion();
    } else if (currentMode === 'medium' || currentMode === 'hard') {
        currentQuestion++;
        if (currentQuestion >= shuffledQuestions.length) {
            updateLevelStars();
            endLevel();
        } else {
            loadQuestion();
        }
    } else {
        currentQuestion++;
        loadQuestion();
    }
}

function endLevel() {
    if (currentMode === 'infinity') {
        return;
    }
    
    updateStars();
    updateLevelStars();
    
    if (currentMode === 'medium' && currentLevel === 5) {
        document.getElementById('message').textContent = `Selamat! Kamu telah menyelesaikan semua level mode sedang! 🎉 Skor akhir: ${score}`;
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('next-level-btn').classList.add('hidden');
        document.getElementById('retry-btn').classList.remove('hidden');
        document.getElementById('retry-btn').textContent = 'Lihat Level';
        document.getElementById('retry-btn').onclick = function() {
            showLevelNavigation();
        };
    } else if (currentMode === 'hard' && currentLevel === 10) {
        document.getElementById('message').textContent = `Selamat! Kamu telah menyelesaikan semua level mode sulit! 🎉 Skor akhir: ${score}`;
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('next-level-btn').classList.add('hidden');
        document.getElementById('retry-btn').classList.remove('hidden');
        document.getElementById('retry-btn').textContent = 'Lihat Level';
        document.getElementById('retry-btn').onclick = function() {
            showLevelNavigation();
        };
    } else {
        document.getElementById('message').textContent = `Level ${currentLevel} selesai!`;
        document.getElementById('next-btn').style.display = 'none';
        
        const correctPercentage = (correctAnswers / totalQuestions) * 100;
        if (correctPercentage >= 50) {
            document.getElementById('next-level-btn').classList.remove('hidden');
            document.getElementById('next-level-btn').textContent = 'Level Selanjutnya';
            document.getElementById('message').textContent = `Selamat! Kamu berhasil menyelesaikan level ${currentLevel}! 🎉`;
        } else {
            document.getElementById('retry-btn').classList.remove('hidden');
            document.getElementById('retry-btn').textContent = 'Coba Lagi';
            document.getElementById('message').textContent = `Ayo coba lagi level ${currentLevel}! Kamu pasti bisa! 💪`;
        }
    }
}

function retryLevel() {
    if (currentMode === 'infinity') {
        startGame('infinity');
    } else {
        correctAnswers = 0;
        document.getElementById('correct-count').textContent = '0';
        loadLevel();
    }
}

function nextLevel() {
    currentLevel++;
    document.getElementById('current-level').textContent = currentLevel;
    loadLevel();
}

function updateLevelStars() {
    const correctPercentage = (correctAnswers / totalQuestions) * 100;
    let stars = 0;
    
    if (correctPercentage >= 80) {
        stars = 3;
    } else if (correctPercentage >= 50) {
        stars = 2;
    } else {
        stars = 1;
    }
    
    if (currentMode === 'medium' || currentMode === 'hard') {
        levelStars[currentMode][currentLevel] = stars;
        localStorage.setItem('levelStars', JSON.stringify(levelStars));
    }
}

function loadLevelStars() {
    const savedStars = localStorage.getItem('levelStars');
    if (savedStars) {
        levelStars = JSON.parse(savedStars);
    }
}

function showLevelNavigation() {
    const container = document.createElement('div');
    container.className = 'level-navigation';
    container.innerHTML = `
        <h3>Level Navigation</h3>
        <div class="level-grid">
            ${Array.from({length: currentMode === 'medium' ? 5 : 10}, (_, i) => {
                const level = i + 1;
                const stars = levelStars[currentMode]?.[level] || 0;
                return `
                    <div class="level-item ${level <= currentLevel ? 'unlocked' : 'locked'}" 
                         onclick="${level <= currentLevel ? `startLevel(${level})` : ''}">
                        <span>Level ${level}</span>
                        <div class="level-stars">
                            ${Array.from({length: 3}, (_, j) => `
                                <i class="fas fa-star ${j < stars ? 'active' : ''}"></i>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    document.getElementById('game-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
    document.querySelector('.container').appendChild(container);
}

function startLevel(level) {
    currentLevel = level;
    document.querySelector('.level-navigation').remove();
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('game-page').classList.add('active');
    loadLevel();
}

// Start with home page
window.onload = function() {
    loadLevelStars();
    document.getElementById('home-page').classList.add('active');
}; 