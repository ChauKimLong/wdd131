//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- MAIN SECTION ---------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
// Educational book descriptions, not publisher blurbs. Cover images are original illustrations.
let books = [
    {
        id: 'intelligent-investor',
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        category: 'value',
        label: 'Value & business',
        image: 'book-intelligent-investor.webp',
        summary: 'A classic exploration of investing principles, market emotions, and the distinction between price and underlying value.',
    },
    {
        id: 'common-sense',
        title: 'The Little Book of Common Sense Investing',
        author: 'John C. Bogle',
        category: 'foundations',
        label: 'Investing foundations',
        image: 'book-common-sense.webp',
        summary: 'An accessible case for low-cost, diversified investing and paying close attention to the effect of fees.',
    },
    {
        id: 'random-walk',
        title: 'A Random Walk Down Wall Street',
        author: 'Burton G. Malkiel',
        category: 'foundations',
        label: 'Investing foundations',
        image: 'book-random-walk.webp',
        summary: 'Introduces market efficiency debates and examines a range of approaches to long-term portfolio construction.',
    },
    {
        id: 'one-up',
        title: 'One Up On Wall Street',
        author: 'Peter Lynch with John Rothchild',
        category: 'value',
        label: 'Value & business',
        image: 'book-one-up.webp',
        summary: 'Encourages readers to observe real businesses, ask practical questions, and research investment ideas carefully.',
    },
    {
        id: 'make-money',
        title: 'How to Make Money in Stocks',
        author: "William J. O'Neil",
        category: 'growth',
        label: 'Growth & trading',
        image: 'book-make-money.webp',
        summary: 'Presents a growth-stock selection approach combining company performance with price and volume behavior.',
    },
    {
        id: 'stock-wizard',
        title: 'Trade Like a Stock Market Wizard',
        author: 'Mark Minervini',
        category: 'growth',
        label: 'Growth & trading',
        image: 'book-stock-wizard.webp',
        summary: 'Focuses on disciplined trading processes, selection criteria, and protecting capital through risk control.',
    }
];

let bookGrid = document.querySelector('#book-grid');
let searchInput = document.querySelector('#book-search');
let categoryInput = document.querySelector('#book-category');
let savedOnlyInput = document.querySelector('#saved-only');
let countLabel = document.querySelector('#book-count');
let emptyLabel = document.querySelector('#book-empty');

function getSavedBooks() {
    try {
        let parsed = JSON.parse(localStorage.getItem('investmentSavedBooks') || '[]');
        return Array.isArray(parsed) ? parsed.filter((id) => books.some((book) => book.id === id)) : [];
    } catch (error) {
        return [];
    }
}

function renderBooks(bookList) {
    let saved = getSavedBooks();
    bookGrid.replaceChildren();
    bookList.forEach((book) => {
        let card = document.createElement('article');
        card.className = 'book-card';
        let isSaved = saved.includes(book.id);
        card.innerHTML = `
            <div class="book-cover"><img src="images/${book.image}" alt="Original illustrated cover for ${book.title}" width="420" height="600" loading="lazy" decoding="async"></div>
            <div class="book-details">
                <span class="book-tag">${book.label}</span>
                <h3>${book.title}</h3>
                <p class="book-author">By ${book.author}</p>
                <p class="book-description">${book.summary}</p>
                <div class="book-actions">
                    <button class="book-save" type="button" data-save="${book.id}" aria-pressed="${isSaved}" aria-label="${isSaved ? 'Remove' : 'Save'} ${book.title} ${isSaved ? 'from' : 'to'} reading list">${isSaved ? '✓ Saved' : '+ Save book'}</button>
                </div>
            </div>`;
        bookGrid.appendChild(card);
    });
    countLabel.textContent = `Showing ${bookList.length} of ${books.length} books · ${saved.length} saved`;
    emptyLabel.hidden = bookList.length !== 0;
}

function filterBooks() {
    let search = searchInput.value.trim().toLowerCase();
    let category = categoryInput.value;
    let saved = getSavedBooks();
    let results = books.filter((book) => {
        let matchesText = `${book.title} ${book.author} ${book.summary}`.toLowerCase().includes(search);
        let matchesCategory = category === 'all' || book.category === category;
        let matchesSaved = !savedOnlyInput.checked || saved.includes(book.id);
        return matchesText && matchesCategory && matchesSaved;
    });
    renderBooks(results);
}

function toggleSavedBook(bookId) {
    let saved = getSavedBooks();
    saved = saved.includes(bookId) ? saved.filter((id) => id !== bookId) : [...saved, bookId];
    localStorage.setItem('investmentSavedBooks', JSON.stringify(saved));
    filterBooks();
}

bookGrid.addEventListener('click', (event) => {
    let button = event.target.closest('[data-save]');
    if (button) toggleSavedBook(button.dataset.save);
});
searchInput.addEventListener('input', filterBooks);
categoryInput.addEventListener('change', filterBooks);
savedOnlyInput.addEventListener('change', filterBooks);
document.querySelector('#clear-filters').addEventListener('click', () => {
    searchInput.value = '';
    categoryInput.value = 'all';
    savedOnlyInput.checked = false;
    filterBooks();
});
filterBooks();
