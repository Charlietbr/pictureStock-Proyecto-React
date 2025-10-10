const keyDown = async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        
        const currentTopic = inputRef.current.value.trim();
        if (!topic.trim()) return; // llamadas vacías
        
        setTopic(currentTopic);

        const dataResults = await search(pagesAmount, currentTopic, resultados, currentPage);

        navigate('/results');

    }

    if (e.key === 'Escape') {
        setTopic('sunset');
        console.log(`Se ha vuelto a la búsqueda por defecto deshaciendo el topicSearch ${topic}`)
    }

  };

  export default keyDown