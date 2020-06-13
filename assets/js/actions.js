
// ready event function

$(document)
    .ready(function() {
        $(document).on('click', 'input[type=radio]', function() {
            const id = $(this).attr('id');
            apply (id);
        });
        
    });



// list of songs that will be iterated
// the recommendations for the users will be made according to the choice/mood picked in the form

const songs = [
    {
        artist: 'Phil Harris, Bruce Reitherman',
        title: 'The Bare Necessities',
        youtubeId: '08NlhjpVFsU',
        mood: 'happy'
    },

     {
        artist: 'James Brown',
        title: 'I Feel Good',
        youtubeId: 'iSLwVaebsJg',
        mood: 'happy'
    },

     {
        artist: 'Los Del Rio',
        title: 'Macarena',
        youtubeId: 'zWaymcVmJ-A',
        mood: 'happy'
    },

     {
        artist: 'PSY',
        title: 'GANGNAM STYLE',
        youtubeId: '9bZkp7q19f0',
        mood: 'happy'
    },

     {
        artist: 'Gusttavo Lima',
        title: 'Balada Boa',
        youtubeId: '5NNi4JIwsCo',
        mood: 'happy'
    },

     {
        artist: 'Natiruts',
        title: 'Reggae Power / Esperar o Sol',
        youtubeId: 'NtV94qNRaTY',
        mood: 'meh'
    },

     {
        artist: 'Damian "Jr. Gong" Marley',
        title: 'Speak Life',
        youtubeId: 'ebfeumBDymc',
        mood: 'meh'
    },

     {
        artist: 'Buena Vista Social Club',
        title: 'Chan Chan (Official Audio)',
        youtubeId: 'o5cELP06Mik',
        mood: 'meh'
    },

     {
        artist: 'A.CHAL',
        title: 'Love N Hennessy',
        youtubeId: 'Tg9sEZNkjDU',
        mood: 'meh'
    },

     {
        artist: 'Arlissa',
        title: 'Devil and The Deep',
        youtubeId: 's4Bo7x4V3Is',
        mood: 'meh'
    },

     {
        artist: 'Paula Fernandes, Marcus Viana',
        title: 'Quando A Chuva Passar',
        youtubeId: 'pnipW5naaFo',
        mood: 'low'
    },

     {
        artist: 'Florence and the Machine',
        title: 'Wish That You Were Here',
        youtubeId: 'dsWDUvuF0Xc',
        mood: 'low'
    },

     {
        artist: 'Carla Morrison',
        title: 'Todo Pasa',
        youtubeId: 'MYUVH4fflc8',
        mood: 'low'
    },

     {
        artist: 'Sara Bareilles',
        title: 'Gravity',
        youtubeId: 'rEXhAMtbaec',
        mood: 'low'
    },

     {
        artist: 'Jacob Banks ',
        title: 'Unknown (To You)',
        youtubeId: 'RsadnWrUY84',
        mood: 'low'
    }
]


// food recommendation function
// iterates through the song list and returns the recommendations for the mood


function apply (mood) {
    const musicList = getMusic(mood);
    const divMusic = document.getElementById('divMusic');
    divMusic.innerText = musicList.join ('\n');          
};

function getMusic (mood) {
    const result = [];
    for (let i = 0; i < songs.length; i++) {
        const songData = songs[i];
        if (songData.mood === mood) {
            result.push(songData.title);
        }
    }
    return result;
};


// list of recipes that will be iterated
// the recommendations for the users will be made according to the choice took in the form


const recipes = [
    {
        recipe: 'Carrot cake',
        bbcGoodFood: 'carrot-cake',
        mood: 'happy'
    },

    {
        recipe: 'Frying pan pizza w/ aubergine, ricotta & mint',
        bbcGoodFood: 'frying-pan-pizza-aubergine-ricotta-mint',
        mood: 'happy'
    },

    {
        recipe: 'Huevos rancheros',
        bbcGoodFood: 'easy-huevos-rancheros',
        mood: 'happy'
    },

    {
        recipe: 'Sweet & sour chicken',
        bbcGoodFood: 'easy-sweet-sour-chicken',
        mood: 'meh'
    },

    {
        recipe: 'Millionaire’s shortbread',
        bbcGoodFood: 'easy-millionaires-shortbread',
        mood: 'meh'
    },

    {
        recipe: 'Ultimate chorizo ciabatta',
        bbcGoodFood: 'ultimate-chorizo-ciabatta',
        mood: 'meh'
    },

    {
        recipe: 'Chicken fajitas',
        bbcGoodFood: 'easy-chicken-fajitas',
        mood: 'low'
    },

    {
        recipe: 'Chocolate molten cakes',
        bbcGoodFood: 'easy-chocolate-molten-cakes',
        mood: 'low'
    },

    {
        recipe: 'Hearty pasta soup',
        bbcGoodFood: 'hearty-pasta-soup',
        mood: 'low'
    }
]