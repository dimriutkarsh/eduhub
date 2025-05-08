// Resources data and rendering functionality

// Sample recent resources data
const recentResources = [
  {
    id: 'r1',
    title: 'Calculus II Final Examination',
    subject: 'Mathematics',
    year: '2024',
    type: 'question-paper',
    typeLabel: 'Question Paper',
    size: '1.8 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'r2',
    title: 'Data Structures Assignment 3 with Solutions',
    subject: 'Computer Science',
    year: '2024',
    type: 'assignment',
    typeLabel: 'Assignment',
    size: '2.4 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'r3',
    title: 'Introduction to Quantum Mechanics Notes',
    subject: 'Physics',
    year: '2023',
    type: 'notes',
    typeLabel: 'Notes',
    size: '4.2 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'r4',
    title: 'Organic Chemistry Midterm Exam',
    subject: 'Chemistry',
    year: '2023',
    type: 'question-paper',
    typeLabel: 'Question Paper',
    size: '1.5 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'r5',
    title: 'English Literature Analysis: Shakespearean Sonnets',
    subject: 'English',
    year: '2024',
    type: 'notes',
    typeLabel: 'Notes',
    size: '3.1 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'r6',
    title: 'World War II Comprehensive Study Materials',
    subject: 'History',
    year: '2023',
    type: 'study-material',
    typeLabel: 'Study Material',
    size: '5.7 MB',
    downloadUrl: '#',
    previewUrl: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Function to render recent resources on the homepage
function renderRecentResources() {
  const container = document.getElementById('recent-resources-container');
  if (!container) return;
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Create and append resource cards
  recentResources.forEach(resource => {
    const card = createResourceCard(resource);
    container.appendChild(card);
  });
}

// Function to create a resource card
function createResourceCard(resource) {
  const card = document.createElement('div');
  card.className = 'resource-card';
  card.setAttribute('data-id', resource.id);
  card.setAttribute('data-year', resource.year);
  card.setAttribute('data-subject', resource.subject.toLowerCase().replace(' ', '-'));
  card.setAttribute('data-type', resource.type);
  
  // Determine icon based on resource type
  let typeIcon = 'fa-file-alt';
  if (resource.type === 'assignment') typeIcon = 'fa-tasks';
  if (resource.type === 'notes') typeIcon = 'fa-sticky-note';
  if (resource.type === 'study-material') typeIcon = 'fa-book';
  
  card.innerHTML = `
    <div class="resource-img" style="background-image: url('${resource.previewUrl}'); background-size: cover; background-position: center;">
      <i class="fas ${typeIcon}"></i>
    </div>
    <div class="resource-details">
      <div class="resource-meta">
        <span class="resource-type">${resource.typeLabel}</span>
        <span class="resource-year">${resource.year}</span>
      </div>
      <h3 class="resource-title">${resource.title}</h3>
      <p class="resource-subject">${resource.subject}</p>
      <div class="resource-actions">
        <a href="javascript:void(0)" class="download-btn" onclick="openResourcePreview('${resource.id}')">
          <i class="fas fa-download"></i> Download
        </a>
        <span class="resource-size">${resource.size}</span>
      </div>
    </div>
  `;
  
  return card;
}

// Initialize recent resources on homepage
document.addEventListener('DOMContentLoaded', () => {
  renderRecentResources();
  
  // Make openResourcePreview globally available
  window.openResourcePreview = (resourceId) => {
    // Find the resource in our data
    const resource = recentResources.find(r => r.id === resourceId);
    if (!resource) return;
    
    // Create and show modal
    const previewModal = document.createElement('div');
    previewModal.className = 'modal';
    previewModal.id = 'resource-preview-modal';
    
    previewModal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${resource.title}</h3>
          <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="preview-container" style="background-image: url('${resource.previewUrl}'); background-size: cover; background-position: center;">
            <img src="${resource.previewUrl}" alt="${resource.title} preview">
          </div>
          <div class="preview-info">
            <h3>${resource.title}</h3>
            <div class="preview-meta">
              <span><i class="fas fa-calendar"></i> ${resource.year}</span>
              <span><i class="fas fa-graduation-cap"></i> ${resource.subject}</span>
              <span><i class="fas fa-file"></i> ${resource.typeLabel}</span>
              <span><i class="fas fa-weight"></i> ${resource.size}</span>
            </div>
            <p>This resource contains comprehensive materials for ${resource.subject} studies. 
               It's been reviewed by faculty and is an excellent study aid.</p>
            <div class="preview-actions">
              <a href="${resource.downloadUrl}" class="btn btn-primary download-btn">
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