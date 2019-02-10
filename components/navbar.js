class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector('.dropdown-btn');      
    this.content = this.element.querySelector('.dropdown-content');
    
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

let cancelBtn = document
.querySelector('.dropdown-btn-cancel')
.addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.toggle('dropdown-hidden');
});