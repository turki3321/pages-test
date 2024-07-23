async function getAnswer() {
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');

    if (!question) {
        alert('يرجى إدخال سؤال');
        return;
    }

    responseDiv.style.display = 'none';
    responseDiv.innerHTML = 'جارٍ التحميل...';
    responseDiv.style.display = 'block';

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-None-3AEFtPW8oFE6LL1d0k1BT3BlbkFJgqbgemMOhHjRaMVRw4G2'
            },
            body: JSON.stringify({
                prompt: question,
                max_tokens: 50
            })
        });
        
        const data = await response.json();
        responseDiv.innerHTML = data.choices[0].text;
    } catch (error) {
        responseDiv.innerHTML = 'حدث خطأ أثناء الحصول على الإجابة.';
        console.error('Error:', error);
    }
}
