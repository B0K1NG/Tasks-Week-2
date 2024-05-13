highlightText = () => {
    const text = document.getElementById('text-input').value;
    const searchTerm = document.getElementById('search-input').value;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
document.getElementById('result').innerHTML = highlightedText;

}