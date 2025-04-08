async function getPuzzle(wordCount) {

    try {
        const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

        const data = await response.json();
        return data.puzzle;

    }

    catch (error) {
        console.error("Error fetching puzzle:", error);
        return "No puzzle could be fetched.";
    }

}


