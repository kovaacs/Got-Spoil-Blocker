var AVCLUB_FEED_ELEMENTS_SELECTOR, BUZZFEED_ELEMENTS_SELECTOR, DATA_KEY, DEATH_NAMES, FACEBOOK_FEED_ELEMENTS_SELECTOR, FEEDLY_ELEMENTS_SELECTOR, GIZMODO_ELEMENTS_SELECTOR, GOOGLE_NEWS_FEED_ELEMENTS_SELECTOR, GOOGLE_PLUS_ELEMENTS_SELECTOR, GOT_RELATED_SUBREDDITS, GOT_SUBREDDITS_REGEX, REDDIT_FEED_ELEMENTS_SELECTOR, SLACK_FEED_ELEMENTS_SELECTOR, SPOILER_WORDS_LIST, SPOILER_WORDS_REGEX, TUMBLR_ELEMENTS_SELECTOR, TWITTER_FEED_ELEMENTS_SELECTOR, YOUTUBE_ELEMENTS_SELECTOR;

DATA_KEY = 'game-of-spoils';

AVCLUB_FEED_ELEMENTS_SELECTOR = '.item, article.short, article > .heading';

BUZZFEED_ELEMENTS_SELECTOR = '.card--article-featured, .card--article, .card--package, .card--video, .sidebar__link, .js-now-buzzing__list > li';

FACEBOOK_FEED_ELEMENTS_SELECTOR = 'div[data-testid="fbfeed_story"],div[data-testid="results"] > div, div[role="article"], #pagelet_trending_tags_and_topics ul > li, #BrowseResultsContainer > div';

FEEDLY_ELEMENTS_SELECTOR = '.entry';

GIZMODO_ELEMENTS_SELECTOR = '.featured-item, article';

GOOGLE_NEWS_FEED_ELEMENTS_SELECTOR = 'a[target="_blank"]';

GOOGLE_PLUS_ELEMENTS_SELECTOR = 'div[id^="update-"], c-wiz div div c-wiz';

REDDIT_FEED_ELEMENTS_SELECTOR = '.sitetable > .thing.link:visible, .usertext-body';

SLACK_FEED_ELEMENTS_SELECTOR = 'ts-message';

TUMBLR_ELEMENTS_SELECTOR = '.post_container, article';

TWITTER_FEED_ELEMENTS_SELECTOR = "[data-item-type='tweet'], .trend-item, article, li";

YOUTUBE_ELEMENTS_SELECTOR = '.yt-lockup, .related-list-item, .comment-renderer-text, ytd-grid-video-renderer, ytd-compact-video-renderer, #primary-inner, ytd-video-renderer';

SPOILER_WORDS_LIST = ['Konohamaru', '#got', 'ady stonehea', 'aidan gillen', 'alfie allen', 'arya stark', 'asoiaf', 'azor ahai', 'baelish', 'baratheon', 'ben crompton', 'bloodraven', 'braavos', 'bran stark', 'briene of tarth', 'brienne of tarth', 'carice van houten', 'casterly rock', 'cersei ', 'conleth hill', 'd.b. weiss', 'daenerys', 'daniel portman', 'david benioff', 'davos seaworth', 'dornish', 'dothraki', 'dreadfort', 'emilia clarke', 'game of thrones', 'gameofthrone', 'gameofthone', 'gamesofthrone', 'greyjoy', 'gwendoline christie', 'highgarden', 'hodor', 'house bolton', 'house stark', 'house tyrell', 'howland reed', 'iain glen', 'ian mcelhinney', 'iron throne', 'isaac hempstead wright', 'jerome flynn', 'john bradley', 'jojen reed', 'jon snow', 'julian glover', 'khaleesi', "king's landing", 'kit harington', 'kit harrington', 'kristian nairn', 'lanister', 'lannisport', 'lannister', 'lena headey', 'liam cunningham', 'littlefinger', 'maisie williams', 'meereen', 'melisandre', 'michele fairley', 'michelle fairley', 'myrcella', 'natalie dormer', 'nathalie emmanue', 'ned stark', 'nikolaj coster-waldau', 'olenna tyrell', 'peter dinklage', 'podrick payne', 'queen of thorns', 'ramsay bolton', 'roose bolton', 'rory mccann', 'sandor clegane', 'sansa stark', 'sophie turner', 'sothoryos', 'stephen dillane', 'targaryen', 'tower of joy', 'tyrion', 'vaes dothrak', 'viserys', 'walder frey', 'westeros', 'white walker', 'whitewalker', 'wildling', 'winterfell', 'گات', 'بازی تاج‌وتخت', 'گیم آف', 'گیم اف', 'کالیسی', 'اژدها', 'فصل هشتم', 'وینترفل', 'جان اسنو', 'تخت آهنین', 'هفت اقلیم', 'دوتراکی', 'وستروس', 'تارگرین', 'تارگاریان', 'وایت واکر', 'استارک', 'کتلین تالی', 'راب', 'سانسا', 'آریا', 'برن', 'ریکن', 'گریجوی', 'رمزی اسنو', 'گندری', 'تارلی', 'گیلی', 'ایگریت', 'سرسی', 'لنیستر', 'تورموند', 'تارث', 'تیریون', 'بران', 'تایوین', 'جافری', 'کلگین', 'پیتر بیلیش', 'لیتل فینگر', 'استنیس', 'باراتیون', 'داووس', 'تایرل', 'مارجری', 'دنریس', 'دروگو', 'مورمنت', 'کینگز لندینگ', 'وستروس', 'پنتوس', 'ویسریس'];

SPOILER_WORDS_REGEX = new RegExp(SPOILER_WORDS_LIST.join('|'), 'i');

DEATH_NAMES = [
    "The web is Dark and full of Spoilers",
    "What do we say to the Page of Spoilers? Not Today!",
    "The man who passes the Spoiler should swing the sword.",
    "When you play the Game of Spoilers, you win or you die.",
    "When Spoilers and worse come hunting... you think it matters who sits on the Iron Throne?",
    "There is a beast in every man and it stirs when you put a Spoiler in his Head.",
    "Hodor",
    "Spoilers cut deeper than swords",
    "If they want to give you a Spoiler, take it, make it your own. Then they can’t hurt you with it anymore.",
    "Of all the ways I’d kill you, Spoilers would be the last.",
    "They say all sorts of crazy Spoilers North of the Wall",
    "Spoilers cannot kill a dragon"
];

GOT_RELATED_SUBREDDITS = ['gameofthrones', 'asoiaf', 'iceandfire', 'agotboardgame', 'gamesofthrones', 'westeros', 'thronescomics', 'asongofmemesandrage', 'earthoficeandfire'];

GOT_SUBREDDITS_REGEX = new RegExp('(\/r\/)' + GOT_RELATED_SUBREDDITS.join('|'), 'i');