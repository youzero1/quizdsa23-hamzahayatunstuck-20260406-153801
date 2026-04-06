import { Category, Question } from '@/types/quiz';

export const categories: Category[] = [
  { id: 'science', name: 'Science', icon: '🔬', description: 'Physics, Chemistry & Biology' },
  { id: 'history', name: 'History', icon: '🏛️', description: 'World History & Events' },
  { id: 'technology', name: 'Technology', icon: '💻', description: 'Computers & Innovation' },
  { id: 'geography', name: 'Geography', icon: '🌍', description: 'Countries & Landmarks' },
  { id: 'sports', name: 'Sports', icon: '⚽', description: 'Games & Athletics' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬', description: 'Movies, Music & TV' },
];

export const questions: Record<string, Record<string, Question[]>> = {
  science: {
    easy: [
      { id: 's-e-1', question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'H2'], correctIndex: 0, explanation: 'Water is composed of two hydrogen atoms and one oxygen atom.' },
      { id: 's-e-2', question: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], correctIndex: 1, explanation: 'There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.' },
      { id: 's-e-3', question: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correctIndex: 2, explanation: 'Plants absorb CO2 during photosynthesis.' },
      { id: 's-e-4', question: 'What is the closest star to Earth?', options: ['Sirius', 'Alpha Centauri', 'The Sun', 'Betelgeuse'], correctIndex: 2, explanation: 'The Sun is the closest star to Earth, at about 93 million miles away.' },
      { id: 's-e-5', question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Quartz'], correctIndex: 2, explanation: 'Diamond is the hardest natural substance, scoring 10 on the Mohs scale.' },
      { id: 's-e-6', question: 'How many bones are in the adult human body?', options: ['196', '206', '216', '226'], correctIndex: 1, explanation: 'An adult human body has 206 bones.' },
      { id: 's-e-7', question: 'What is the speed of light?', options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'], correctIndex: 0, explanation: 'The speed of light in a vacuum is approximately 300,000 km/s.' },
      { id: 's-e-8', question: 'What organ pumps blood through the body?', options: ['Lungs', 'Liver', 'Heart', 'Kidneys'], correctIndex: 2, explanation: 'The heart is the organ responsible for pumping blood.' },
    ],
    medium: [
      { id: 's-m-1', question: 'What is the atomic number of Carbon?', options: ['4', '6', '8', '12'], correctIndex: 1, explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons.' },
      { id: 's-m-2', question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'], correctIndex: 2, explanation: 'Mitochondria are known as the powerhouse of the cell.' },
      { id: 's-m-3', question: 'What is Newton\'s Second Law of Motion?', options: ['F = ma', 'E = mc²', 'V = IR', 'PV = nRT'], correctIndex: 0, explanation: 'Newton\'s Second Law states Force equals mass times acceleration.' },
      { id: 's-m-4', question: 'What is the pH of pure water?', options: ['5', '6', '7', '8'], correctIndex: 2, explanation: 'Pure water has a neutral pH of 7.' },
      { id: 's-m-5', question: 'Which planet has the most moons?', options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], correctIndex: 1, explanation: 'Saturn has the most confirmed moons with over 140.' },
      { id: 's-m-6', question: 'What is the most abundant gas in Earth\'s atmosphere?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'], correctIndex: 2, explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere.' },
      { id: 's-m-7', question: 'What is the unit of electrical resistance?', options: ['Volt', 'Ampere', 'Watt', 'Ohm'], correctIndex: 3, explanation: 'The ohm (Ω) is the SI unit of electrical resistance.' },
      { id: 's-m-8', question: 'How many chromosomes do humans have?', options: ['23', '44', '46', '48'], correctIndex: 2, explanation: 'Humans have 46 chromosomes (23 pairs).' },
    ],
    hard: [
      { id: 's-h-1', question: 'What is the Heisenberg Uncertainty Principle?', options: ['Energy cannot be created or destroyed', 'You cannot simultaneously know both the position and momentum of a particle', 'Every action has an equal and opposite reaction', 'Matter and energy are interchangeable'], correctIndex: 1, explanation: 'The Heisenberg Uncertainty Principle states you cannot simultaneously know both position and momentum.' },
      { id: 's-h-2', question: 'What is the Chandrasekhar limit?', options: ['1.4 solar masses', '2.4 solar masses', '3.4 solar masses', '4.4 solar masses'], correctIndex: 0, explanation: 'The Chandrasekhar limit is about 1.4 solar masses, the maximum mass of a stable white dwarf.' },
      { id: 's-h-3', question: 'What is the half-life of Carbon-14?', options: ['1,730 years', '5,730 years', '11,460 years', '22,920 years'], correctIndex: 1, explanation: 'Carbon-14 has a half-life of approximately 5,730 years.' },
      { id: 's-h-4', question: 'What is the Boltzmann constant approximately?', options: ['1.38 × 10⁻²³ J/K', '6.02 × 10²³ mol⁻¹', '9.81 m/s²', '3.14 × 10⁸ m/s'], correctIndex: 0, explanation: 'The Boltzmann constant k ≈ 1.38 × 10⁻²³ J/K.' },
      { id: 's-h-5', question: 'In quantum mechanics, what does the Schrödinger equation describe?', options: ['The speed of light', 'How quantum states evolve over time', 'The force between charged particles', 'Nuclear decay rates'], correctIndex: 1, explanation: 'The Schrödinger equation describes how the quantum state of a physical system changes over time.' },
      { id: 's-h-6', question: 'What is the name of the process by which plants make food?', options: ['Respiration', 'Fermentation', 'Photosynthesis', 'Transpiration'], correctIndex: 2, explanation: 'Photosynthesis is the process by which plants use sunlight, water, and CO2 to produce food.' },
      { id: 's-h-7', question: 'What is the chemical formula for glucose?', options: ['C6H12O6', 'C12H22O11', 'C2H5OH', 'CH4'], correctIndex: 0, explanation: 'Glucose has the chemical formula C6H12O6.' },
      { id: 's-h-8', question: 'What type of bond involves sharing of electron pairs?', options: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Metallic bond'], correctIndex: 1, explanation: 'Covalent bonds involve the sharing of electron pairs between atoms.' },
    ]
  },
  history: {
    easy: [
      { id: 'h-e-1', question: 'In which year did World War II end?', options: ['1943', '1944', '1945', '1946'], correctIndex: 2, explanation: 'World War II ended in 1945 with Germany surrendering in May and Japan in September.' },
      { id: 'h-e-2', question: 'Who was the first President of the United States?', options: ['John Adams', 'Thomas Jefferson', 'George Washington', 'Benjamin Franklin'], correctIndex: 2, explanation: 'George Washington was the first President of the United States, serving from 1789 to 1797.' },
      { id: 'h-e-3', question: 'The Great Wall of China was primarily built to defend against whom?', options: ['Japanese', 'Mongols', 'Persians', 'Romans'], correctIndex: 1, explanation: 'The Great Wall was built primarily to protect against Mongol invasions.' },
      { id: 'h-e-4', question: 'In which year did Christopher Columbus reach the Americas?', options: ['1488', '1490', '1492', '1498'], correctIndex: 2, explanation: 'Columbus reached the Americas in 1492.' },
      { id: 'h-e-5', question: 'Which ancient wonder was located in Alexandria?', options: ['Hanging Gardens', 'Colossus of Rhodes', 'Great Lighthouse', 'Statue of Zeus'], correctIndex: 2, explanation: 'The Great Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World.' },
      { id: 'h-e-6', question: 'Who wrote the Declaration of Independence?', options: ['George Washington', 'Benjamin Franklin', 'John Adams', 'Thomas Jefferson'], correctIndex: 3, explanation: 'Thomas Jefferson was the primary author of the Declaration of Independence.' },
      { id: 'h-e-7', question: 'Which empire was ruled by Julius Caesar?', options: ['Greek', 'Roman', 'Ottoman', 'Persian'], correctIndex: 1, explanation: 'Julius Caesar was a Roman general and statesman.' },
      { id: 'h-e-8', question: 'In which year did the Berlin Wall fall?', options: ['1987', '1988', '1989', '1990'], correctIndex: 2, explanation: 'The Berlin Wall fell on November 9, 1989.' },
    ],
    medium: [
      { id: 'h-m-1', question: 'The Battle of Waterloo took place in which year?', options: ['1812', '1815', '1820', '1825'], correctIndex: 1, explanation: 'The Battle of Waterloo took place on June 18, 1815.' },
      { id: 'h-m-2', question: 'Which country was NOT part of the Allied Powers in WWI?', options: ['France', 'Russia', 'Germany', 'Britain'], correctIndex: 2, explanation: 'Germany was part of the Central Powers, not the Allied Powers.' },
      { id: 'h-m-3', question: 'Who was the last pharaoh of ancient Egypt?', options: ['Nefertiti', 'Cleopatra VII', 'Hatshepsut', 'Ramesses II'], correctIndex: 1, explanation: 'Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt.' },
      { id: 'h-m-4', question: 'The Magna Carta was signed in which year?', options: ['1066', '1215', '1348', '1492'], correctIndex: 1, explanation: 'The Magna Carta was signed by King John in 1215.' },
      { id: 'h-m-5', question: 'Which revolution began in 1789?', options: ['American Revolution', 'French Revolution', 'Industrial Revolution', 'Russian Revolution'], correctIndex: 1, explanation: 'The French Revolution began in 1789.' },
      { id: 'h-m-6', question: 'Who led the Soviet Union during WWII?', options: ['Lenin', 'Trotsky', 'Stalin', 'Khrushchev'], correctIndex: 2, explanation: 'Joseph Stalin led the Soviet Union during World War II.' },
      { id: 'h-m-7', question: 'The Silk Road connected China to which region?', options: ['Africa', 'Americas', 'Mediterranean Europe', 'Australia'], correctIndex: 2, explanation: 'The Silk Road was a network of trade routes connecting China to Mediterranean Europe.' },
      { id: 'h-m-8', question: 'In which year was the United Nations founded?', options: ['1942', '1945', '1948', '1950'], correctIndex: 1, explanation: 'The United Nations was founded in 1945 after World War II.' },
    ],
    hard: [
      { id: 'h-h-1', question: 'The Treaty of Westphalia ended which war?', options: ['The Hundred Years War', 'The Thirty Years War', 'The Seven Years War', 'The Napoleonic Wars'], correctIndex: 1, explanation: 'The Peace of Westphalia in 1648 ended the Thirty Years War.' },
      { id: 'h-h-2', question: 'Which Byzantine Emperor codified Roman law in the Corpus Juris Civilis?', options: ['Constantine I', 'Theodosius I', 'Justinian I', 'Heraclius'], correctIndex: 2, explanation: 'Emperor Justinian I commissioned the Corpus Juris Civilis in 529-534 AD.' },
      { id: 'h-h-3', question: 'The Peloponnesian War was fought between which city-states?', options: ['Athens and Sparta', 'Rome and Carthage', 'Athens and Corinth', 'Sparta and Thebes'], correctIndex: 0, explanation: 'The Peloponnesian War was fought between Athens and Sparta.' },
      { id: 'h-h-4', question: 'Who was the first Mughal Emperor of India?', options: ['Akbar', 'Babur', 'Humayun', 'Shah Jahan'], correctIndex: 1, explanation: 'Babur was the founder and first emperor of the Mughal Empire.' },
      { id: 'h-h-5', question: 'The Battle of Thermopylae was fought in which year BCE?', options: ['490 BCE', '480 BCE', '470 BCE', '460 BCE'], correctIndex: 1, explanation: 'The Battle of Thermopylae was fought in 480 BCE.' },
      { id: 'h-h-6', question: 'Which empire was known as the "Empire on which the sun never sets"?', options: ['Spanish Empire', 'British Empire', 'Ottoman Empire', 'Mongol Empire'], correctIndex: 1, explanation: 'The British Empire was commonly known as the empire on which the sun never sets.' },
      { id: 'h-h-7', question: 'Who wrote "The Art of War"?', options: ['Confucius', 'Lao Tzu', 'Sun Tzu', 'Mencius'], correctIndex: 2, explanation: 'Sun Tzu wrote The Art of War, an ancient Chinese military treatise.' },
      { id: 'h-h-8', question: 'The Meiji Restoration occurred in which country?', options: ['China', 'Korea', 'Japan', 'Vietnam'], correctIndex: 2, explanation: 'The Meiji Restoration was a political event in Japan in 1868.' },
    ]
  },
  technology: {
    easy: [
      { id: 't-e-1', question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Core Processing Unit'], correctIndex: 0 },
      { id: 't-e-2', question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Link', 'Home Tool Markup Language'], correctIndex: 0 },
      { id: 't-e-3', question: 'Who co-founded Apple Inc.?', options: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Jeff Bezos'], correctIndex: 1 },
      { id: 't-e-4', question: 'What does USB stand for?', options: ['Universal Serial Bus', 'United System Bridge', 'Universal System Backup', 'Unified Serial Bridge'], correctIndex: 0 },
      { id: 't-e-5', question: 'What is the most popular programming language for web development?', options: ['Python', 'Java', 'JavaScript', 'C++'], correctIndex: 2 },
      { id: 't-e-6', question: 'What does Wi-Fi stand for?', options: ['Wireless Fidelity', 'Wide Frequency', 'Wireless Frequency Interface', 'Wide Fidelity'], correctIndex: 0 },
      { id: 't-e-7', question: 'Which company developed the Android operating system?', options: ['Apple', 'Microsoft', 'Google', 'Samsung'], correctIndex: 2 },
      { id: 't-e-8', question: 'What does RAM stand for?', options: ['Random Access Memory', 'Read Access Module', 'Rapid Application Memory', 'Random Application Module'], correctIndex: 0 },
    ],
    medium: [
      { id: 't-m-1', question: 'What programming paradigm does React use?', options: ['Object-Oriented', 'Functional', 'Component-Based', 'Procedural'], correctIndex: 2 },
      { id: 't-m-2', question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correctIndex: 2 },
      { id: 't-m-3', question: 'What does API stand for?', options: ['Application Programming Interface', 'Automated Program Integration', 'Application Protocol Interface', 'Advanced Programming Integration'], correctIndex: 0 },
      { id: 't-m-4', question: 'Which protocol is used for secure web communication?', options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'], correctIndex: 2 },
      { id: 't-m-5', question: 'What is a "404 error" in web development?', options: ['Server Error', 'Page Not Found', 'Unauthorized Access', 'Bad Request'], correctIndex: 1 },
      { id: 't-m-6', question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Logic', 'Standard Query Language', 'Structured Quick Language'], correctIndex: 0 },
      { id: 't-m-7', question: 'What is "Git" primarily used for?', options: ['Database management', 'Version control', 'Web hosting', 'Network security'], correctIndex: 1 },
      { id: 't-m-8', question: 'Which data structure uses LIFO?', options: ['Queue', 'Array', 'Stack', 'Linked List'], correctIndex: 2 },
    ],
    hard: [
      { id: 't-h-1', question: 'What is a "race condition" in programming?', options: ['A performance optimization technique', 'When two threads access shared data simultaneously causing unexpected behavior', 'A type of sorting algorithm', 'A network latency issue'], correctIndex: 1 },
      { id: 't-h-2', question: 'What does CAP theorem state?', options: ['A distributed system can only guarantee 2 of 3: Consistency, Availability, Partition tolerance', 'CPU speed is limited by cache size', 'Cryptographic algorithms need 3 keys', 'Code complexity increases exponentially'], correctIndex: 0 },
      { id: 't-h-3', question: 'What is "Big O" notation used for?', options: ['Describing memory allocation', 'Describing algorithm complexity', 'Describing network bandwidth', 'Describing database size'], correctIndex: 1 },
      { id: 't-h-4', question: 'What is a "deadlock" in computing?', options: ['A system crash', 'When two processes wait for each other to release resources', 'A type of encryption', 'A memory overflow'], correctIndex: 1 },
      { id: 't-h-5', question: 'What is the difference between TCP and UDP?', options: ['TCP is faster, UDP is more reliable', 'TCP is reliable and ordered, UDP is faster but unreliable', 'They are the same protocol', 'TCP is for files, UDP is for streaming'], correctIndex: 1 },
      { id: 't-h-6', question: 'What is "memoization" in programming?', options: ['Writing code comments', 'Caching function results to avoid recomputation', 'Memory management technique', 'A debugging method'], correctIndex: 1 },
      { id: 't-h-7', question: 'What is the purpose of a "load balancer"?', options: ['To increase server storage', 'To distribute network traffic across multiple servers', 'To encrypt data', 'To monitor network performance'], correctIndex: 1 },
      { id: 't-h-8', question: 'What is "idempotency" in REST APIs?', options: ['Making APIs faster', 'An operation that produces the same result regardless of how many times it is called', 'Securing API endpoints', 'Versioning APIs'], correctIndex: 1 },
    ]
  },
  geography: {
    easy: [
      { id: 'g-e-1', question: 'What is the largest continent?', options: ['Africa', 'North America', 'Asia', 'Europe'], correctIndex: 2 },
      { id: 'g-e-2', question: 'What is the capital of France?', options: ['London', 'Berlin', 'Madrid', 'Paris'], correctIndex: 3 },
      { id: 'g-e-3', question: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctIndex: 1 },
      { id: 'g-e-4', question: 'How many continents are there on Earth?', options: ['5', '6', '7', '8'], correctIndex: 2 },
      { id: 'g-e-5', question: 'What is the smallest country in the world?', options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'], correctIndex: 2 },
      { id: 'g-e-6', question: 'Which ocean is the largest?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctIndex: 3 },
      { id: 'g-e-7', question: 'What is the capital of Japan?', options: ['Osaka', 'Kyoto', 'Tokyo', 'Hiroshima'], correctIndex: 2 },
      { id: 'g-e-8', question: 'Mount Everest is located in which mountain range?', options: ['Andes', 'Alps', 'Rockies', 'Himalayas'], correctIndex: 3 },
    ],
    medium: [
      { id: 'g-m-1', question: 'Which country has the most natural lakes?', options: ['Russia', 'USA', 'Canada', 'Brazil'], correctIndex: 2 },
      { id: 'g-m-2', question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correctIndex: 2 },
      { id: 'g-m-3', question: 'The Amazon rainforest is primarily in which country?', options: ['Colombia', 'Peru', 'Venezuela', 'Brazil'], correctIndex: 3 },
      { id: 'g-m-4', question: 'Which country has the largest population?', options: ['India', 'China', 'USA', 'Indonesia'], correctIndex: 0 },
      { id: 'g-m-5', question: 'The Sahara Desert is located on which continent?', options: ['Asia', 'Australia', 'Africa', 'South America'], correctIndex: 2 },
      { id: 'g-m-6', question: 'What is the currency of Japan?', options: ['Yuan', 'Won', 'Yen', 'Ringgit'], correctIndex: 2 },
      { id: 'g-m-7', question: 'Which strait separates Europe from Africa?', options: ['Strait of Hormuz', 'Strait of Gibraltar', 'Bering Strait', 'Strait of Malacca'], correctIndex: 1 },
      { id: 'g-m-8', question: 'What is the tallest mountain in Africa?', options: ['Mount Kenya', 'Mount Kilimanjaro', 'Ras Dashen', 'Mount Stanley'], correctIndex: 1 },
    ],
    hard: [
      { id: 'g-h-1', question: 'Which country has the most time zones?', options: ['Russia', 'USA', 'China', 'France'], correctIndex: 3 },
      { id: 'g-h-2', question: 'What is the deepest lake in the world?', options: ['Lake Superior', 'Lake Titicaca', 'Lake Baikal', 'Caspian Sea'], correctIndex: 2 },
      { id: 'g-h-3', question: 'The Mariana Trench is located in which ocean?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctIndex: 3 },
      { id: 'g-h-4', question: 'Which country is home to the most UNESCO World Heritage Sites?', options: ['China', 'Italy', 'Spain', 'France'], correctIndex: 1 },
      { id: 'g-h-5', question: 'What is the capital of Kazakhstan?', options: ['Almaty', 'Astana', 'Shymkent', 'Karaganda'], correctIndex: 1 },
      { id: 'g-h-6', question: 'The Atacama Desert is located in which country?', options: ['Peru', 'Argentina', 'Chile', 'Bolivia'], correctIndex: 2 },
      { id: 'g-h-7', question: 'Which river flows through the most countries?', options: ['Nile', 'Amazon', 'Danube', 'Congo'], correctIndex: 2 },
      { id: 'g-h-8', question: 'What is the largest desert in the world?', options: ['Sahara', 'Arabian', 'Antarctic', 'Gobi'], correctIndex: 2 },
    ]
  },
  sports: {
    easy: [
      { id: 'sp-e-1', question: 'How many players are on a soccer team?', options: ['9', '10', '11', '12'], correctIndex: 2 },
      { id: 'sp-e-2', question: 'In which sport is the term "slam dunk" used?', options: ['Baseball', 'Basketball', 'Volleyball', 'Tennis'], correctIndex: 1 },
      { id: 'sp-e-3', question: 'How many rings are on the Olympic flag?', options: ['4', '5', '6', '7'], correctIndex: 1 },
      { id: 'sp-e-4', question: 'What sport is played at Wimbledon?', options: ['Cricket', 'Golf', 'Tennis', 'Polo'], correctIndex: 2 },
      { id: 'sp-e-5', question: 'How many points is a touchdown worth in American football?', options: ['4', '5', '6', '7'], correctIndex: 2 },
      { id: 'sp-e-6', question: 'In which sport would you perform a "hat trick"?', options: ['Basketball', 'Tennis', 'Soccer', 'Baseball'], correctIndex: 2 },
      { id: 'sp-e-7', question: 'What is the maximum score in a single game of bowling?', options: ['200', '250', '300', '350'], correctIndex: 2 },
      { id: 'sp-e-8', question: 'How many holes are there in a standard round of golf?', options: ['9', '12', '18', '24'], correctIndex: 2 },
    ],
    medium: [
      { id: 'sp-m-1', question: 'Which country won the first FIFA World Cup in 1930?', options: ['Brazil', 'Argentina', 'Uruguay', 'Italy'], correctIndex: 2 },
      { id: 'sp-m-2', question: 'In tennis, what is the term for a score of 40-40?', options: ['Tie', 'Deuce', 'Love', 'Advantage'], correctIndex: 1 },
      { id: 'sp-m-3', question: 'How many Grand Slam tournaments are there in tennis?', options: ['2', '3', '4', '5'], correctIndex: 2 },
      { id: 'sp-m-4', question: 'What is the diameter of a basketball hoop in inches?', options: ['14 inches', '16 inches', '18 inches', '20 inches'], correctIndex: 2 },
      { id: 'sp-m-5', question: 'Which country has won the most Olympic gold medals overall?', options: ['Russia', 'China', 'USA', 'Germany'], correctIndex: 2 },
      { id: 'sp-m-6', question: 'In cricket, how many balls are in an over?', options: ['4', '5', '6', '8'], correctIndex: 2 },
      { id: 'sp-m-7', question: 'What is the length of a marathon in kilometers?', options: ['40.195 km', '42.195 km', '44.195 km', '46.195 km'], correctIndex: 1 },
      { id: 'sp-m-8', question: 'Which sport uses a puck?', options: ['Lacrosse', 'Field Hockey', 'Ice Hockey', 'Polo'], correctIndex: 2 },
    ],
    hard: [
      { id: 'sp-h-1', question: 'Who holds the record for most Olympic gold medals?', options: ['Carl Lewis', 'Usain Bolt', 'Michael Phelps', 'Mark Spitz'], correctIndex: 2 },
      { id: 'sp-h-2', question: 'In which year were women first allowed to compete in the Olympics?', options: ['1896', '1900', '1908', '1920'], correctIndex: 1 },
      { id: 'sp-h-3', question: 'What is the height of the net in men\'s volleyball?', options: ['2.23 m', '2.33 m', '2.43 m', '2.53 m'], correctIndex: 2 },
      { id: 'sp-h-4', question: 'Which country invented the sport of badminton?', options: ['China', 'India', 'England', 'Denmark'], correctIndex: 2 },
      { id: 'sp-h-5', question: 'How many players are on a water polo team in the water?', options: ['5', '6', '7', '8'], correctIndex: 2 },
      { id: 'sp-h-6', question: 'What is the weight of a standard soccer ball in grams?', options: ['350-390g', '410-450g', '470-500g', '510-550g'], correctIndex: 1 },
      { id: 'sp-h-7', question: 'In which sport is the "Fosbury Flop" technique used?', options: ['Long Jump', 'Pole Vault', 'High Jump', 'Triple Jump'], correctIndex: 2 },
      { id: 'sp-h-8', question: 'How many points is the bullseye worth in standard darts?', options: ['25', '50', '75', '100'], correctIndex: 1 },
    ]
  },
  entertainment: {
    easy: [
      { id: 'e-e-1', question: 'Who played Iron Man in the Marvel Cinematic Universe?', options: ['Chris Evans', 'Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'], correctIndex: 1 },
      { id: 'e-e-2', question: 'Which band performed "Bohemian Rhapsody"?', options: ['The Beatles', 'Led Zeppelin', 'Queen', 'Pink Floyd'], correctIndex: 2 },
      { id: 'e-e-3', question: 'In which movie does the character "Simba" appear?', options: ['Bambi', 'The Jungle Book', 'The Lion King', 'Tarzan'], correctIndex: 2 },
      { id: 'e-e-4', question: 'Who wrote the Harry Potter series?', options: ['Stephenie Meyer', 'J.R.R. Tolkien', 'C.S. Lewis', 'J.K. Rowling'], correctIndex: 3 },
      { id: 'e-e-5', question: 'What is the highest-grossing film of all time?', options: ['Titanic', 'Avengers: Endgame', 'Avatar', 'The Lion King'], correctIndex: 2 },
      { id: 'e-e-6', question: 'Which streaming service produced "Stranger Things"?', options: ['HBO', 'Amazon Prime', 'Netflix', 'Disney+'], correctIndex: 2 },
      { id: 'e-e-7', question: 'Who sang "Thriller"?', options: ['Prince', 'Michael Jackson', 'Whitney Houston', 'Madonna'], correctIndex: 1 },
      { id: 'e-e-8', question: 'In "Friends", what is the name of Ross\'s monkey?', options: ['Marcel', 'Charlie', 'Bubbles', 'George'], correctIndex: 0 },
    ],
    medium: [
      { id: 'e-m-1', question: 'Who directed "The Dark Knight"?', options: ['Steven Spielberg', 'Christopher Nolan', 'Tim Burton', 'Zack Snyder'], correctIndex: 1 },
      { id: 'e-m-2', question: 'Which album by Michael Jackson is the best-selling album of all time?', options: ['Bad', 'Thriller', 'Off the Wall', 'Dangerous'], correctIndex: 1 },
      { id: 'e-m-3', question: 'In which year was the first iPhone released?', options: ['2005', '2006', '2007', '2008'], correctIndex: 2 },
      { id: 'e-m-4', question: 'Who plays Walter White in "Breaking Bad"?', options: ['Bryan Cranston', 'Aaron Paul', 'Bob Odenkirk', 'Dean Norris'], correctIndex: 0 },
      { id: 'e-m-5', question: 'Which film won the first Academy Award for Best Picture?', options: ['It Happened One Night', 'Wings', 'All Quiet on the Western Front', 'Cimarron'], correctIndex: 1 },
      { id: 'e-m-6', question: 'What is the name of the fictional kingdom in "Frozen"?', options: ['Enchantia', 'Arendelle', 'Eldorado', 'Narnia'], correctIndex: 1 },
      { id: 'e-m-7', question: 'Who composed the music for "Star Wars"?', options: ['Hans Zimmer', 'John Williams', 'Ennio Morricone', 'Danny Elfman'], correctIndex: 1 },
      { id: 'e-m-8', question: 'In which city is the TV show "Seinfeld" set?', options: ['Los Angeles', 'Chicago', 'New York City', 'Boston'], correctIndex: 2 },
    ],
    hard: [
      { id: 'e-h-1', question: 'Who directed "2001: A Space Odyssey"?', options: ['Steven Spielberg', 'Stanley Kubrick', 'Ridley Scott', 'George Lucas'], correctIndex: 1 },
      { id: 'e-h-2', question: 'Which Beethoven symphony is known as the "Choral" symphony?', options: ['5th', '6th', '7th', '9th'], correctIndex: 3 },
      { id: 'e-h-3', question: 'Who wrote the novel "One Hundred Years of Solitude"?', options: ['Pablo Neruda', 'Jorge Luis Borges', 'Gabriel García Márquez', 'Isabel Allende'], correctIndex: 2 },
      { id: 'e-h-4', question: 'Which film director is known for the "Dogme 95" movement?', options: ['Lars von Trier', 'Ingmar Bergman', 'Federico Fellini', 'Akira Kurosawa'], correctIndex: 0 },
      { id: 'e-h-5', question: 'What is the name of the opera house in Sydney, Australia?', options: ['Royal Opera House', 'Sydney Opera House', 'Metropolitan Opera', 'La Scala'], correctIndex: 1 },
      { id: 'e-h-6', question: 'Who painted the "Sistine Chapel" ceiling?', options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Donatello'], correctIndex: 2 },
      { id: 'e-h-7', question: 'Which jazz musician was known as "The Duke"?', options: ['Miles Davis', 'Louis Armstrong', 'Duke Ellington', 'Charlie Parker'], correctIndex: 2 },
      { id: 'e-h-8', question: 'The novel "Don Quixote" was written by whom?', options: ['William Shakespeare', 'Miguel de Cervantes', 'Dante Alighieri', 'Homer'], correctIndex: 1 },
    ]
  }
};

export function getQuestions(categoryId: string, difficulty: string): Question[] {
  const categoryQuestions = questions[categoryId];
  if (!categoryQuestions) return [];
  const difficultyQuestions = categoryQuestions[difficulty];
  if (!difficultyQuestions) return [];
  return shuffleArray([...difficultyQuestions]).slice(0, 8);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
