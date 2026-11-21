//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- MAIN SECTION ---------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//

let learningForm = document.querySelector('#learning-plan-form');
let learningMessage = document.querySelector('#learning-message');
let topicSelect = document.querySelector('#learning-topic');
let validTopics = ['basics', 'risk', 'analysis'];

function loadLearningPreference() {
    let savedTopic = localStorage.getItem('investmentLearningTopic');
    if (validTopics.includes(savedTopic)) {
        topicSelect.value = savedTopic;
        learningMessage.textContent = `Welcome back! Your saved learning topic is ${topicSelect.options[topicSelect.selectedIndex].text}.`;
    }
}

learningForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(learningForm);
    let topic = formData.get('topic');
    let experience = formData.get('experience');
    if (!validTopics.includes(topic) || !['beginner', 'learning'].includes(experience)) {
        learningMessage.textContent = 'Please select a topic and your experience level.';
        return;
    }
    // Store only these non-identifying preferences; do not store the free-text question.
    localStorage.setItem('investmentLearningTopic', topic);
    localStorage.setItem('investmentExperience', experience);
    learningMessage.textContent = `Saved! Your learning topic is ${topicSelect.options[topicSelect.selectedIndex].text}. This preference stays in your browser.`;
});
loadLearningPreference();
