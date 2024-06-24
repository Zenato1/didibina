const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dateInput = document.querySelector('#date');
    const monthInput = document.querySelector('#month');
    const date = parseInt(dateInput.value);
    const month = parseInt(monthInput.value);
    const zodiacSign = getZodiacSign(month, date);
    const health = getHealth(zodiacSign);
    const love = getLove(zodiacSign);
    const finance = getFinance(zodiacSign);
    const career = getCareer(zodiacSign);

    resultDiv.innerHTML = `
        <h2>Your Zodiac Sign: ${zodiacSign}</h2>
        <p>Health: ${health}</p>
        <p>Love: ${love}</p>
        <p>Finance: ${finance}</p>
        <p>Career: ${career}</p>
    `;
});

function getZodiacSign(month, date) {
    if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
        return 'Aquarius';
    } else if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
        return 'Pisces';
    } else if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
        return 'Aries';
    } else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
        return 'Taurus';
    } else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
        return 'Gemini';
    } else if ((month == 6 && date >= 21) || (month == 7 && date <= 22)) {
        return 'Cancer';
    } else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
        return 'Leo';
    } else if ((month == 8&& date >= 23) || (month == 9 && date <= 22)) {
        return 'Virgo';
    } else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
        return 'Libra';
    } else if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
        return 'Scorpio';
    } else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
        return 'Sagittarius';
    } else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
        return 'Capricorn';
    }
}

function getHealth(zodiacSign) {
    const health = {
        Aquarius: 'Anda memiliki sistem kekebalan yang kuat dan secara umum sehat. Waspadai kecemasan dan stres.',
        Pisces: 'Anda sensitif dan intuitif, yang dapat memengaruhi kesehatan Anda. Jaga kesehatan mental Anda dan makanlah dengan baik.',
        Aries: 'Anda energik dan suka bertualang, tetapi rentan terhadap kecelakaan. Berhati-hatilah dan lakukan tindakan pencegahan.',
        Taurus: 'Anda dapat diandalkan dan sabar, namun rentan mengalami kenaikan berat badan. Perhatikan pola makan dan olahraga secara teratur.',
        Gemini: 'Anda mudah beradaptasi dan ingin tahu, namun rentan terhadap rasa gugup. Latih teknik relaksasi dan perawatan diri.',
        Cancer: 'Anda emosional dan mengasuh, tetapi rentan terhadap perubahan suasana hati. Jaga kesehatan mental Anda dan carilah dukungan bila diperlukan.',
        Leo: 'Anda percaya diri dan karismatik, tetapi cenderung sombong. Latihlah kerendahan hati dan carilah keseimbangan dalam hidup Anda.',
        Virgo: 'Anda analitis dan kritis, tetapi cenderung perfeksionisme. Latihlah rasa kasihan pada diri sendiri dan carilah dukungan saat dibutuhkan.',
        Libra: 'Anda diplomatis dan mudah bergaul, namun rentan terhadap keragu-raguan. Berlatihlah membuat keputusan dan mengambil tindakan.',
        Scorpio: 'Anda orang yang intens dan tertutup, namun rentan terhadap obsesi. Berlatihlah melepaskan dan mencari keseimbangan dalam hidup Anda.',
        Sagittarius: 'Anda optimis dan suka berpetualang, namun rentan terhadap kecerobohan. Berlatihlah dengan hati-hati dan carilah keseimbangan dalam hidup Anda.',
        Capricorn: 'Anda ambisius dan bertanggung jawab, namun rentan terhadap gila kerja. Latih perawatan diri dan carilah keseimbangan dalam hidup Anda.',
    };

    return health[zodiacSign];
}

function getLove(zodiacSign) {
    const love = {
        Aquarius: 'Anda mandiri dan tidak konvensional dalam cinta. Anda membutuhkan pasangan yang dapat menghargai individualitas Anda dan memberi Anda ruang.',
        Pisces: 'Anda sensitif dan imajinatif dalam cinta. Anda membutuhkan pasangan yang dapat memahami dan mendukung kebutuhan emosional Anda.',
        Aries: 'Anda energik dan petualang dalam cinta. Anda membutuhkan pasangan yang dapat mengikuti kecepatan Anda dan berbagi gairah hidup Anda.',
        Taurus: 'Anda dapat diandalkan dan sabar dalam cinta. Anda membutuhkan mitra yang dapat memberikan stabilitas dan dukungan.',
        Gemini: 'Anda mudah beradaptasi dan ingin tahu dalam cinta. Anda membutuhkan pasangan yang dapat mengikuti perubahan suasana hati dan minat Anda.',
        Cancer: 'Anda emosional dan memelihara cinta. Anda membutuhkan pasangan yang dapat memberikan dukungan emosional dan keamanan.',
        Leo: 'Anda percaya diri dan karismatik dalam cinta. Anda membutuhkan pasangan yang bisa menghargai kehangatan dan kemurahan hati Anda.',
        Virgo: 'Anda analitis dan kritis dalam cinta. Anda membutuhkan mitra yang dapat menangani standar tinggi dan perhatian Anda terhadap detail.',
        Libra: 'Anda diplomatis dan mudah bergaul dalam cinta. Anda membutuhkan pasangan yang dapat menyeimbangkan kebutuhan Anda akan harmoni dan keinginan Anda untuk kegembiraan.',
        Scorpio: 'Anda intens dan tertutup dalam cinta. Anda membutuhkan mitra yang dapat menangani kedalaman dan kompleksitas Anda.',
        Sagittarius: 'Anda optimis dan suka berpetualang dalam cinta. Anda membutuhkan pasangan yang dapat berbagi cinta Anda akan kebebasan dan eksplorasi.',
        Capricorn: 'Anda ambisius dan bertanggung jawab dalam cinta. Anda membutuhkan mitra yang dapat mendukung tujuan dan aspirasi Anda.',
    };

    return love[zodiacSign];
}

function getFinance(zodiacSign) {
    const finance = {
        Aquarius: 'Anda tidak konvensional dan mandiri di bidang keuangan. Anda harus berhati-hati untuk tidak membiarkan individualisme Anda mengarah pada isolasi keuangan.',
        Pisces: 'Anda imajinatif dan sensitif dalam keuangan. Anda harus berhati-hati untuk tidak membiarkan emosi Anda mendorong keputusan keuangan Anda.',
        Aries: 'Anda impulsif dan kompetitif di bidang keuangan. Anda perlu menyeimbangkan keinginan Anda untuk kepuasan instan dengan perencanaan jangka panjang.',
        Taurus: 'Anda praktis dan dapat diandalkan dalam keuangan. Anda harus berhati-hati untuk tidak menjadi terlalu konservatif atau resisten terhadap perubahan.',
        Gemini: 'Anda mudah beradaptasi dan ingin tahu di bidang keuangan. Anda harus berhati-hati untuk tidak menyebarkan sumber daya Anda atau membuat keputusan impulsif.',
        Cancer: 'Anda emosional dan mengayomi di bidang keuangan. Anda perlu menyeimbangkan keinginan Anda untuk menyediakan bagi orang lain dengan keamanan finansial Anda sendiri.',
        Leo: 'Anda murah hati dan percaya diri dalam keuangan. Anda harus berhati-hati untuk tidak membiarkan ego Anda mendorong keputusan keuangan Anda.',
        Virgo: 'Anda analitis dan kritis dalam keuangan. Anda harus berhati-hati untuk tidak terlalu fokus pada detail atau melewatkan gambaran besar.',
        Libra: 'Anda diplomatis dan mudah bergaul di bidang keuangan. Anda harus berhati-hati untuk tidak membiarkan hubungan Anda mengaburkan penilaian keuangan Anda.',
        Scorpio: 'Anda intens dan tertutup di bidang keuangan. Anda harus berhati-hati untuk tidak membiarkan keinginan Anda untuk mengontrol menyebabkan perilaku berisiko.',
        Sagittarius: 'Anda optimis dan suka berpetualang di bidang keuangan. Anda harus berhati-hati untuk tidak membiarkan antusiasme Anda menyebabkan pengeluaran sembrono.',
        Capricorn: 'Anda ambisius dan bertanggung jawab di bidang keuangan. Anda harus berhati-hati untuk tidak membiarkan kecenderungan gila kerja Anda menyebabkan kelelahan atau mengabaikan keuangan pribadi Anda.',
    };

    return finance[zodiacSign];
}

function getCareer(zodiacSign) {
    const career = {
        Aquarius: 'Anda tidak konvensional dan mandiri dalam karir Anda. Anda membutuhkan lingkungan kerja yang kreatif dan inovatif yang memungkinkan Anda untuk menggunakan individualisme dan visi Anda.',
        Pisces: 'Anda imajinatif dan sensitif dalam karir Anda. Anda membutuhkan lingkungan kerja yang penuh kasih dan intuitif yang memungkinkan Anda menggunakan kreativitas dan empati Anda.',
        Aries: 'Anda adalah pemimpin alami dan pelopor dalam karir Anda. Anda membutuhkan lingkungan kerja yang menantang dan dinamis yang memungkinkan Anda untuk mengekspresikan kreativitas dan ketegasan Anda.',
        Taurus: 'Anda dapat diandalkan dan sabar dalam karir Anda. Anda memerlukan lingkungan kerja yang stabil dan aman yang memungkinkan Anda untuk menggunakan keterampilan praktis Anda dan membangun hubungan jangka panjang.',
        Gemini: 'Anda mudah beradaptasi dan ingin tahu dalam karir Anda. Anda membutuhkan lingkungan kerja yang bervariasi dan merangsang yang memungkinkan Anda untuk berkomunikasi dan mempelajari hal-hal baru.',
        Cancer: 'Anda emosional dan memelihara dalam karir Anda. Anda membutuhkan lingkungan kerja yang mendukung dan peduli yang memungkinkan Anda mengekspresikan empati dan intuisi Anda.',
        Leo: 'Anda percaya diri dan karismatik dalam karir Anda. Anda membutuhkan lingkungan kerja yang bergengsi dan terlihat yang memungkinkan Anda untuk menunjukkan bakat dan keterampilan kepemimpinan Anda.',
        Virgo: 'Anda analitis dan kritis dalam karir Anda. Anda memerlukan lingkungan kerja yang berorientasi pada detail dan terorganisir yang memungkinkan Anda menggunakan perfeksionisme dan efisiensi Anda.',
        Libra: 'Anda diplomatis dan mudah bergaul dalam karir Anda. Anda membutuhkan lingkungan kerja yang harmonis dan kolaboratif yang memungkinkan Anda untuk menggunakan pesona dan kebijaksanaan Anda.',
        Scorpio: 'Anda intens dan tertutup dalam karir Anda. Anda membutuhkan lingkungan kerja yang strategis dan kompetitif yang memungkinkan Anda untuk menggunakan intuisi dan akal Anda.',
        Sagittarius: 'Anda optimis dan petualang dalam karir Anda. Anda membutuhkan lingkungan kerja yang mencintai kebebasan dan eksplorasi yang memungkinkan Anda untuk menggunakan rasa ingin tahu dan nafsu berkelana Anda.',
        Capricorn: 'Anda ambisius dan bertanggung jawab dalam karir Anda. Anda membutuhkan lingkungan kerja yang terstruktur dan disiplin yang memungkinkan Anda untuk menggunakan ambisi dan etos kerja Anda.',
    };

    return career[zodiacSign];
}