// Notes JavaScript

// Sample notes data
const notes = [
  {
    id: 'n1',
    title: 'Data Structures and Algorithms Complete Notes',
    subject: 'computer-science',
    subjectLabel: 'Computer Science',
    topic: 'data-structures',
    topicLabel: 'Data Structures',
    year: '2023',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '4.2 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive notes covering all data structures including arrays, linked lists, trees, graphs, and hash tables. Also includes algorithm analysis and common algorithms.'
  },
  {
    id: 'n2',
    title: 'Calculus II: Integration Techniques',
    subject: 'mathematics',
    subjectLabel: 'Mathematics',
    topic: 'calculus',
    topicLabel: 'Calculus',
    year: '2023',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '3.5 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Detailed notes on integration techniques including substitution, integration by parts, trigonometric integrals, and improper integrals.'
  },
  {
    id: 'n3',
    title: 'Quantum Mechanics Principles',
    subject: 'physics',
    subjectLabel: 'Physics',
    topic: 'quantum-physics',
    topicLabel: 'Quantum Physics',
    year: '2023',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '5.1 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An introduction to quantum mechanics principles, wave-particle duality, Schrödinger equation, and quantum operators.'
  },
  {
    id: 'n4',
    title: 'Organic Chemistry: Functional Groups',
    subject: 'chemistry',
    subjectLabel: 'Chemistry',
    topic: 'organic-chemistry',
    topicLabel: 'Organic Chemistry',
    year: '2023',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '3.8 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive notes on organic chemistry functional groups, their properties, reactions, and synthesis methods.'
  },
  {
    id: 'n5',
    title: 'Shakespearean Sonnets Analysis',
    subject: 'english',
    subjectLabel: 'English',
    topic: 'literature',
    topicLabel: 'Literature',
    year: '2023',
    format: 'doc',
    formatLabel: 'Word',
    size: '2.6 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'In-depth analysis of William Shakespeare\'s sonnets, including themes, literary devices, and historical context.'
  },
  {
    id: 'n6',
    title: 'World War II: Causes and Consequences',
    subject: 'history',
    subjectLabel: 'History',
    topic: 'modern-history',
    topicLabel: 'Modern History',
    year: '2023',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '4.7 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive notes on the causes, major events, and global consequences of World War II.'
  },
  {
    id: 'n7',
    title: 'Machine Learning Fundamentals',
    subject: 'computer-science',
    subjectLabel: 'Computer Science',
    topic: 'artificial-intelligence',
    topicLabel: 'Artificial Intelligence',
    year: '2024',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '5.3 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Introduction to machine learning concepts, supervised and unsupervised learning, neural networks, and practical applications.'
  },
  {
    id: 'n8',
    title: 'Differential Equations Solved Examples',
    subject: 'mathematics',
    subjectLabel: 'Mathematics',
    topic: 'differential-equations',
    topicLabel: 'Differential Equations',
    year: '2024',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '3.2 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Collection of solved examples for ordinary differential equations, including first-order, second-order, and systems of differential equations.'
  },
  {
    id: 'n9',
    title: 'Thermodynamics Laws and Applications',
    subject: 'physics',
    subjectLabel: 'Physics',
    topic: 'thermodynamics',
    topicLabel: 'Thermodynamics',
    year: '2024',
    format: 'ppt',
    formatLabel: 'PowerPoint',
    size: '4.1 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Detailed notes on the laws of thermodynamics, entropy, heat engines, and real-world applications.'
  },
  {
    id: 'n10',
    title: 'Biochemistry: Proteins and Enzymes',
    subject: 'chemistry',
    subjectLabel: 'Chemistry',
    topic: 'biochemistry',
    topicLabel: 'Biochemistry',
    year: '2022',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '4.4 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive notes on protein structure, function, and enzyme kinetics in biochemical systems.'
  },
  {
    id: 'n11',
    title: 'American Literature: Modernist Period',
    subject: 'english',
    subjectLabel: 'English',
    topic: 'american-literature',
    topicLabel: 'American Literature',
    year: '2022',
    format: 'doc',
    formatLabel: 'Word',
    size: '3.5 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Notes on American literature during the modernist period, including major authors, works, and themes.'
  },
  {
    id: 'n12',
    title: 'Ancient Civilizations: Egypt and Mesopotamia',
    subject: 'history',
    subjectLabel: 'History',
    topic: 'ancient-history',
    topicLabel: 'Ancient History',
    year: '2022',
    format: 'pdf',
    formatLabel: 'PDF',
    size: '5.2 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive study on the ancient civilizations of Egypt and Mesopotamia, including culture, politics, and achievements.'
  }
  // Add more notes as needed
];

// Render notes on the page
function renderNotes() {
  const container = document.getElementById('notes-container');
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Create and append resource cards
  notes.forEach(note => {
    const card = createNoteCard(note);
    container.appendChild(card);
  });
  
  // Update count
  const countElement = document.getElementById('count-number');
  if (countElement) {
    countElement.textContent = notes.length;
  }
}

// Create note card
function createNoteCard(note) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  card.setAttribute('data-id', note.id);
  card.setAttribute('data-year', note.year);
  card.setAttribute('data-subject', note.subject);
  card.setAttribute('data-type', note.format);
  card.setAttribute('data-topic', note.topic);
  
  // Choose icon based on format
  let formatIcon = 'fa-file-pdf';
  if (note.format === 'doc') formatIcon = 'fa-file-word';
  if (note.format === 'ppt') formatIcon = 'fa-file-powerpoint';
  
  card.innerHTML = `
    <div class="resource-img" style="background-image: url('${note.previewUrl}'); background-size: cover; background-position: center;">
      <i class="fas ${formatIcon}"></i>
    </div>
    <div class="resource-details">
      <div class="resource-meta">
        <span class="resource-type">${note.formatLabel}</span>
        <span class="resource-year">${note.year}</span>
      </div>
      <h3 class="resource-title">${note.title}</h3>
      <p class="resource-subject">${note.subjectLabel} - ${note.topicLabel}</p>
      <div class="resource-actions">
        <a href="javascript:void(0)" class="download-btn" onclick="openNotePreview('${note.id}')">
          <i class="fas fa-download"></i> Download
        </a>
        <span class="resource-size">${note.size}</span>
      </div>
    </div>
  `;
  
  return card;
}

// Populate topics based on selected subject
function populateTopics(subjectValue) {
  const topicFilter = document.getElementById('topic-filter');
  if (!topicFilter) return;
  
  // Clear current options
  topicFilter.innerHTML = '<option value="">All Topics</option>';
  
  if (!subjectValue) return;
  
  // Get unique topics for the selected subject
  const topicsForSubject = notes
    .filter(note => note.subject === subjectValue)
    .map(note => ({ value: note.topic, label: note.topicLabel }));
  
  // Remove duplicates
  const uniqueTopics = [];
  const topicMap = {};
  
  topicsForSubject.forEach(topic => {
    if (!topicMap[topic.value]) {
      topicMap[topic.value] = true;
      uniqueTopics.push(topic);
    }
  });
  
  // Add options to dropdown
  uniqueTopics.forEach(topic => {
    const option = document.createElement('option');
    option.value = topic.value;
    option.textContent = topic.label;
    topicFilter.appendChild(option);
  });
}

// Initialize notes on page load
document.addEventListener('DOMContentLoaded', () => {
  renderNotes();
  
  // Initialize filters if they exist
  const subjectFilter = document.getElementById('subject-filter');
  const topicFilter = document.getElementById('topic-filter');
  const formatFilter = document.getElementById('format-filter');
  
  if (subjectFilter) {
    // Listen for changes to the subject filter
    subjectFilter.addEventListener('change', () => {
      populateTopics(subjectFilter.value);
    });
  }
  
  // Make preview function globally available
  window.openNotePreview = (noteId) => {
    // Find the note in our data
    const note = notes.find(n => n.id === noteId);
    if (!note) return;
    
    // Create and show modal
    const previewModal = document.createElement('div');
    previewModal.className = 'modal';
    previewModal.id = 'note-preview-modal';
    
    previewModal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${note.title}</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="preview-container">
            <img src="${note.previewUrl}" alt="${note.title} preview">
          </div>
          <div class="preview-info">
            <h3>${note.title}</h3>
            <div class="preview-meta">
              <span><i class="fas fa-calendar"></i> ${note.year}</span>
              <span><i class="fas fa-graduation-cap"></i> ${note.subjectLabel} - ${note.topicLabel}</span>
              <span><i class="fas fa-file"></i> ${note.formatLabel}</span>
              <span><i class="fas fa-weight"></i> ${note.size}</span>
            </div>
            <p>${note.description}</p>
            <div class="preview-actions">
              <a href="${note.downloadUrl}" class="btn btn-primary download-btn">
                <i class="fas fa-download"></i> Download
              </a>
              <button class="btn btn-outline close-preview">Close Preview</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(previewModal);
    
    // Animation for smooth appearance
    setTimeout(() => {
      previewModal.classList.add('active');
    }, 10);
    
    // Close modal functionality
    const closeButtons = previewModal.querySelectorAll('.close-modal, .close-preview');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        previewModal.classList.remove('active');
        setTimeout(() => {
          previewModal.remove();
        }, 300);
      });
    });
    
    // Close on outside click
    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) {
        previewModal.classList.remove('active');
        setTimeout(() => {
          previewModal.remove();
        }, 300);
      }
    });
  };
});