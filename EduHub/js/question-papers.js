// Question Papers JavaScript

// Sample question papers data with corrected file paths
const questionPapers = [
  {
    id: 'qp1',
    title: 'Data Structures and Algorithms Final Exam',
    subject: 'computer-science',
    subjectLabel: 'Computer Science',
    year: '2023',
    gradeYear: '3',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '2.4 MB',
    downloadUrl: 'http://localhost:8000/Phyiscspaper1.pdf',
    previewUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp2',
    title: 'Linear Algebra Midterm Examination',
    subject: 'mathematics',
    subjectLabel: 'Mathematics',
    year: '2023',
    gradeYear: '2',
    type: 'midterm',
    typeLabel: 'Midterm',
    size: '1.8 MB',
    downloadUrl: './files/question_paper/LinearAlgebra_Midterm_2023.pdf',
    previewUrl: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp3',
    title: 'Quantum Mechanics Final Examination',
    subject: 'physics',
    subjectLabel: 'Physics',
    year: '2023',
    gradeYear: '4',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '3.1 MB',
    downloadUrl: './files/question_paper/QuantumMechanics_Final_2023.pdf',
    previewUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp4',
    title: 'Organic Chemistry Quiz 2',
    subject: 'chemistry',
    subjectLabel: 'Chemistry',
    year: '2024',
    gradeYear: '2',
    type: 'quiz',
    typeLabel: 'Quiz',
    size: '1.2 MB',
    downloadUrl: './files/question_paper/OrganicChemistry_Quiz2_2024.pdf',
    previewUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp5',
    title: 'English Literature Final Examination',
    subject: 'english',
    subjectLabel: 'English',
    year: '2022',
    gradeYear: '3',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '2.0 MB',
    downloadUrl: './files/question_paper/EnglishLit_Final_2022.pdf',
    previewUrl: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp6',
    title: 'World History Midterm Examination',
    subject: 'history',
    subjectLabel: 'History',
    year: '2022',
    gradeYear: '1',
    type: 'midterm',
    typeLabel: 'Midterm',
    size: '1.9 MB',
    downloadUrl: './files/question_paper/WorldHistory_Midterm_2022.pdf',
    previewUrl: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp7',
    title: 'Computer Networks Final Examination',
    subject: 'computer-science',
    subjectLabel: 'Computer Science',
    year: '2024',
    gradeYear: '4',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '2.7 MB',
    downloadUrl: './files/question_paper/ComputerNetworks_Final_2024.pdf',
    previewUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp8',
    title: 'Calculus II Midterm Examination',
    subject: 'mathematics',
    subjectLabel: 'Mathematics',
    year: '2024',
    gradeYear: '2',
    type: 'midterm',
    typeLabel: 'Midterm',
    size: '1.6 MB',
    downloadUrl: './files/question_paper/CalculusII_Midterm_2024.pdf',
    previewUrl: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp9',
    title: 'Thermodynamics Quiz 1',
    subject: 'physics',
    subjectLabel: 'Physics',
    year: '2024',
    gradeYear: '3',
    type: 'quiz',
    typeLabel: 'Quiz',
    size: '1.1 MB',
    downloadUrl: './files/question_paper/Thermodynamics_Quiz1_2024.pdf',
    previewUrl: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp10',
    title: 'Inorganic Chemistry Final Examination',
    subject: 'chemistry',
    subjectLabel: 'Chemistry',
    year: '2021',
    gradeYear: '3',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '2.3 MB',
    downloadUrl: './files/question_paper/InorganicChem_Final_2021.pdf',
    previewUrl: 'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp11',
    title: 'British Literature Midterm Examination',
    subject: 'english',
    subjectLabel: 'English',
    year: '2021',
    gradeYear: '2',
    type: 'midterm',
    typeLabel: 'Midterm',
    size: '1.7 MB',
    downloadUrl: './files/question_paper/BritishLit_Midterm_2021.pdf',
    previewUrl: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp12',
    title: 'Ancient Civilizations Quiz 3',
    subject: 'history',
    subjectLabel: 'History',
    year: '2021',
    gradeYear: '1',
    type: 'quiz',
    typeLabel: 'Quiz',
    size: '1.0 MB',
    downloadUrl: './files/question_paper/AncientCivilizations_Quiz3_2021.pdf',
    previewUrl: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp13',
    title: 'Artificial Intelligence Final Examination',
    subject: 'computer-science',
    subjectLabel: 'Computer Science',
    year: '2020',
    gradeYear: '4',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '2.8 MB',
    downloadUrl: './files/question_paper/AI_Final_2020.pdf',
    previewUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp14',
    title: 'Differential Equations Midterm Examination',
    subject: 'mathematics',
    subjectLabel: 'Mathematics',
    year: '2020',
    gradeYear: '3',
    type: 'midterm',
    typeLabel: 'Midterm',
    size: '1.9 MB',
    downloadUrl: './files/question_paper/DiffEquations_Midterm_2020.pdf',
    previewUrl: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'qp15',
    title: 'Electromagnetism Final Examination',
    subject: 'physics',
    subjectLabel: 'Physics',
    year: '2020',
    gradeYear: '2',
    type: 'final',
    typeLabel: 'Final Exam',
    size: '2.5 MB',
    downloadUrl: './files/question_paper/Electromagnetism_Final_2020.pdf',
    previewUrl: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// State for filtered papers
let filteredPapers = [...questionPapers];
const itemsPerPage = 6;
let currentPage = 1;

// Create question paper card
function createQuestionPaperCard(paper) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  card.setAttribute('data-id', paper.id);
  card.setAttribute('data-year', paper.year);
  card.setAttribute('data-grade', paper.gradeYear);
  card.setAttribute('data-subject', paper.subject);
  card.setAttribute('data-type', paper.type);
  
  card.innerHTML = `
    <div class="resource-img" style="background-image: url('${paper.previewUrl}'); background-size: cover; background-position: center;">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="resource-details">
      <div class="resource-meta">
        <span class="resource-type">${paper.typeLabel}</span>
        <span class="resource-year">${paper.year}</span>
      </div>
      <h3 class="resource-title">${paper.title}</h3>
      <p class="resource-subject">${paper.subjectLabel}</p>
      <div class="resource-actions">
        <a href="javascript:void(0)" class="download-btn" onclick="openQuestionPaperPreview('${paper.id}')">
          <i class="fas fa-download"></i> Download
        </a>
        <span class="resource-size">${paper.size}</span>
      </div>
    </div>
  `;
  
  return card;
}

// Render filtered papers with pagination
function renderQuestionPapers() {
  const container = document.getElementById('question-papers-container');
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPapers = filteredPapers.slice(startIndex, endIndex);
  
  // Create and append resource cards
  paginatedPapers.forEach(paper => {
    const card = createQuestionPaperCard(paper);
    container.appendChild(card);
  });
  
  // Update count
  const countElement = document.getElementById('count-number');
  if (countElement) {
    countElement.textContent = filteredPapers.length;
  }
  
  // Update pagination
  updatePagination();
}

// Update pagination controls
function updatePagination() {
  const pagination = document.getElementById('pagination-numbers');
  if (!pagination) return;
  
  // Clear existing pagination
  pagination.innerHTML = '';
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredPapers.length / itemsPerPage);
  
  // Create pagination buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = `pagination-number ${i === currentPage ? 'active' : ''}`;
    pageButton.setAttribute('data-page', i);
    pageButton.textContent = i;
    
    pageButton.addEventListener('click', () => {
      currentPage = i;
      renderQuestionPapers();
      
      // Scroll to top of resources section
      const resourcesSection = document.querySelector('.resources-section');
      if (resourcesSection) {
        resourcesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    pagination.appendChild(pageButton);
  }
  
  // Setup prev/next buttons
  const prevButton = document.querySelector('.pagination-btn[data-page="prev"]');
  const nextButton = document.querySelector('.pagination-btn[data-page="next"]');
  
  if (prevButton) {
    prevButton.disabled = currentPage === 1;
    prevButton.style.opacity = currentPage === 1 ? '0.5' : '1';
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderQuestionPapers();
        // Scroll to top of resources section
        const resourcesSection = document.querySelector('.resources-section');
        if (resourcesSection) {
          resourcesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  
  if (nextButton) {
    nextButton.disabled = currentPage === totalPages;
    nextButton.style.opacity = currentPage === totalPages ? '0.5' : '1';
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderQuestionPapers();
        // Scroll to top of resources section
        const resourcesSection = document.querySelector('.resources-section');
        if (resourcesSection) {
          resourcesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}

// Apply filters function
function applyFilters() {
  const yearFilter = document.getElementById('academic-year-filter').value;
  const gradeYearFilter = document.getElementById('grade-year-filter').value;
  const subjectFilter = document.getElementById('subject-filter').value;
  const examTypeFilter = document.getElementById('exam-type-filter').value;
  const searchText = document.getElementById('resource-search').value.toLowerCase();
  
  // Filter papers based on selected criteria
  filteredPapers = questionPapers.filter(paper => {
    const yearMatch = !yearFilter || paper.year === yearFilter;
    const gradeMatch = !gradeYearFilter || paper.gradeYear === gradeYearFilter;
    const subjectMatch = !subjectFilter || paper.subject === subjectFilter;
    const typeMatch = !examTypeFilter || paper.type === examTypeFilter;
    const searchMatch = !searchText || 
                       paper.title.toLowerCase().includes(searchText) || 
                       paper.subjectLabel.toLowerCase().includes(searchText);
    
    return yearMatch && gradeMatch && subjectMatch && typeMatch && searchMatch;
  });
  
  // Reset to first page
  currentPage = 1;
  
  // Re-render papers
  renderQuestionPapers();
}

// Preview and download function
function openQuestionPaperPreview(paperId) {
  // Find the paper in our data
  const paper = questionPapers.find(p => p.id === paperId);
  if (!paper) return;
  
  // Create and show modal
  const previewModal = document.createElement('div');
  previewModal.className = 'modal';
  previewModal.id = 'question-paper-preview-modal';
  
  previewModal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">${paper.title}</h3>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="preview-container">
          <img src="${paper.previewUrl}" alt="${paper.title} preview">
        </div>
        <div class="preview-info">
          <h3>${paper.title}</h3>
          <div class="preview-meta">
            <span><i class="fas fa-calendar"></i> ${paper.year}</span>
            <span><i class="fas fa-graduation-cap"></i> ${paper.subjectLabel}</span>
            <span><i class="fas fa-file"></i> ${paper.typeLabel}</span>
            <span><i class="fas fa-weight"></i> ${paper.size}</span>
          </div>
          <p>This question paper contains all questions from the ${paper.year} ${paper.typeLabel} 
             for ${paper.subjectLabel}. It includes both multiple choice and written sections.</p>
          <div class="preview-actions">
            <a href="${paper.downloadUrl}" class="btn btn-primary download-btn" download>
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
  
  // Direct download functionality
  const downloadBtn = previewModal.querySelector('.download-btn');
  downloadBtn.addEventListener('click', (e) => {
    // Create a notification that download has started
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> Download started for "${paper.title}"`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '20px';
    notification.style.padding = '15px 20px';
    notification.style.backgroundColor = 'var(--success-color)';
    notification.style.color = 'white';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  });
}

// Initialize question papers on page load
document.addEventListener('DOMContentLoaded', () => {
  // Render initial papers
  renderQuestionPapers();
  
  // Initialize filters if they exist
  const academicYearFilter = document.getElementById('academic-year-filter');
  const gradeYearFilter = document.getElementById('grade-year-filter');
  const subjectFilter = document.getElementById('subject-filter');
  const examTypeFilter = document.getElementById('exam-type-filter');
  const searchInput = document.getElementById('resource-search');
  const searchBtn = document.getElementById('resource-search-btn');
  const applyFiltersBtn = document.getElementById('apply-filters');
  
  // Populate filters with unique values from our data
  if (academicYearFilter) {
    // Get unique years from data
    const years = [...new Set(questionPapers.map(paper => paper.year))].sort().reverse();
    
    // Clear default options
    academicYearFilter.innerHTML = '<option value="">All Years</option>';
    
    // Add year options
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      academicYearFilter.appendChild(option);
    });
  }
  
  // Set up event listeners for filters
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyFilters);
  }
  
  if (searchBtn) {
    searchBtn.addEventListener('click', applyFilters);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        applyFilters();
      }
    });
  }
  
  // Make preview function globally available
  window.openQuestionPaperPreview = openQuestionPaperPreview;
  
  // Create dummy PDF files directory structure
  console.log('Question Papers Portal initialized successfully.');
  console.log('Note: To enable actual PDF downloads, ensure that PDF files exist at the paths specified in the downloadUrl properties.');
});