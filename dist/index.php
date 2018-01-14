<?
  $lang = @$_COOKIE['lang'];
  if (!$lang) {
    $lang = 'ru';
  }

  $titleRU = 'Дизайн-бюро Артёма Горбунова';
  $titleEN = 'Artem Gorbunov Design Bureau';
?>

<!doctype html>
<html class="no-js" lang="ru">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?= $lang == 'ru' ? $titleRU : $titleEN; ?></title>
        <meta name="title-ru" content="<?= $titleRU; ?>" id="title-ru">
        <meta name="title-en" content="<?= $titleEN; ?>" id="title-en">
        <meta name="description" content="">
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/vendor.min.css">
        <link rel="stylesheet" href="css/app.css">

        <style>
            .en .ru,
            .ru .en {
              display: none;
            }
        </style>
    </head>

    <body class="<?= $lang; ?>">

<div class="loader js-loader">
    <img class="loader__img" src="img/loader.gif" alt="Loading...">
</div>

<header class="header">
    <div class="container">
<div class="header__logo logo">
    <a href="index.html"><img src="img/logo.png" alt="BioLedCoin"></a>
</div>

<div class="header__panel panel">
    <select class="panel__langauge js-langauge" id="js-switcher-lang">
        <option>Eng</option>
        <option>Rus</option>
    </select>

    <a href="#" class="panel__login">Login</a>
</div>

<div class="header__menu menu js-menu">
    <button class="menu__btn js-menu-btn">
        <span class="menu__icon"></span>

        <span class="menu__title">Menu</span>
    </button>

    <nav>
        <ul class="menu__ul js-menu-content">
            <li>
                <a class="menu__link" href="index.html">Raodmap</a>
            </li>
            <li>
                <a class="menu__link" href="index.html">Our team</a>
            </li>
            <li>
                <a class="menu__link" href="index.html">News</a>
            </li>
            <li>
                <a class="menu__link" href="index.html">Bounty</a>
            </li>
        </ul>
    </nav>
</div>



        <div class="header__content">
<div class="header__text-block text-block">
    <h1 class="text-block__title">Заголовок</h1>

    <div class="text-block__subtitle">
        <p>Таким образом сложившаяся структура организации позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.</p>
    </div>

    <ul class="text-block__links-wrap">
        <li><a class="text-block__link" href="#">White paper</a></li>
        <li><a class="text-block__link" href="#">Бизнес план</a></li>
        <li><a class="text-block__link" href="#">Bounty</a></li>
    </ul>

    <ul class="text-block__social social">
        <li><a class="social__item social__item_linkedin" href="#">BioLedCoin Linkedin</a></li>
        <li><a class="social__item social__item_facebook" href="#">BioLedCoin Facebook</a></li>
        <li><a class="social__item social__item_instagram" href="#">BioLedCoin Instagram</a></li>
        <li><a class="social__item social__item_vkontakte" href="#">BioLedCoin Vkontakte</a></li>
        <li><a class="social__item social__item_youtube" href="#">BioLedCoin Youtube</a></li>
    </ul>
</div>

<div class="header__stages stages">
    <div class="stages__title">
        <p>Start PreICO</p>
    </div>

    <div class="stages__rate">
        <p>1 LBC = 1 waves</p>
    </div>

    <div class="stages__progress progress">
        <ul class="progress__stages-name">
            <li class="progress__stage-item">Pre-Sale</li>
            <li class="progress__stage-item">Pre-Ico</li>
            <li class="progress__stage-item">Ico</li>
        </ul>

        <ul class="progress__bar">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <ul class="progress__stages-money">
            <li class="progress__stage-item">30 000 $</li>

            <li class="progress__stage-item">60 000 $</li>

            <li class="progress__stage-item">3 000 000 $</li>
        </ul>
    </div>

    <div class="stages__date date">
        <div class="date__text">
            <p>Stats PreICO on <b>February 01 th</b></p>
        </div>

        <div class="date__time-wrap">
            <div class="date__time date__time_days" id="js-days">12</div>
            <div class="date__time date__time_hours" id="js-hours">26</div>
            <div class="date__time date__time_min" id="js-min">02</div>
            <div class="date__time date__time_sec" id="js-sec">12</div>
        </div>
    </div>

    <a class="stages__buy" href="#">Купить токены!</a>
</div>

        </div>
    </div>
</header>

<main class="main">
    <div class="container">
<div class="main__roadmap roadmap">
    <div class="roadmap__title">
        <h2>Roadmap</h2>
    </div>

    <div class="roadmap__slider js-roadmap-slider">
        <div class="roadmap__roadmap-item roadmap-item">
            <div class="roadmap-item__title">
                <h3>Pre-ICO</h3>
            </div>

            <div class="roadmap-item__text">
                <p>Равным образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Равным образом постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание систем массового участия. Равным образом сложившаяся структура организации влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Товарищи! рамки и место обучения кадров позволяет выполнять важные задания по разработке соответствующий условий активизации.</p>

                <p>Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности играет важную роль в формировании систем массового участия. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки новых предложений. С другой стороны консультация с широким активом играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Равным образом постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки соответствующий условий активизации.</p>
            </div>
        </div>

        <div class="roadmap__roadmap-item roadmap-item">
            <div class="roadmap-item__title">
                <h3>ICO</h3>
            </div>

            <div class="roadmap-item__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minus itaque necessitatibus eum ad fuga, velit reprehenderit autem ex sequi nostrum commodi, ipsum rerum molestiae aliquam quibusdam voluptas. Ab soluta architecto sed dolorem, perspiciatis itaque cumque optio alias. Veritatis modi obcaecati cupiditate asperiores, voluptates. Deserunt, quasi voluptates, consectetur illum soluta et ipsa pariatur incidunt dolorem harum cupiditate vel alias possimus, amet doloribus mollitia aut non unde minus placeat explicabo. Expedita deleniti inventore ipsa laboriosam, quisquam illum, quae culpa nam amet voluptates accusantium dolorem tenetur. Voluptatum, nesciunt ipsum fuga neque rem in ipsa doloribus voluptas laboriosam, similique, veniam maxime. Nostrum, accusantium!</p>
            </div>
        </div>

        <div class="roadmap__roadmap-item roadmap-item">
            <div class="roadmap-item__title">
                <h3>Реализация</h3>
            </div>

            <div class="roadmap-item__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto iure quod vitae qui cumque laboriosam dolorum blanditiis rem quia repellendus, magni optio voluptates non impedit eligendi! Recusandae obcaecati cupiditate esse sapiente temporibus veritatis facilis. Explicabo ut eveniet illum eius ipsum, officiis dolorem, minima voluptatem cum ducimus nihil numquam ex suscipit quae officia, repellat vitae. Neque debitis, quae eum tenetur ipsum harum quos corrupti corporis ad delectus. Libero voluptatem quod unde enim, eos sit neque porro aliquam iusto, ipsum similique eligendi.</p>
            </div>
        </div>

        <div class="roadmap__roadmap-item roadmap-item">
            <div class="roadmap-item__title">
                <h3>Девиденты</h3>
            </div>

            <div class="roadmap-item__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolores assumenda, expedita voluptas doloribus asperiores possimus a similique quis sequi molestias itaque ipsa, distinctio enim, necessitatibus tenetur porro reiciendis quisquam numquam illum maxime labore! Voluptatem dicta explicabo nisi non repellat asperiores, illum vitae rerum placeat consequuntur saepe inventore unde doloremque tenetur quos necessitatibus amet aliquam eos delectus magnam suscipit ex. Consectetur repellat omnis, consequuntur, adipisci quae quis animi accusamus eveniet aliquid voluptatibus reprehenderit enim sunt architecto. Dolor ipsam iusto culpa, veniam quam illo alias, ipsa voluptas optio totam dolore in rerum consectetur sit dolores beatae libero, ea pariatur qui! Fugiat cum, omnis dolor et porro, harum rerum quo, voluptate esse minima modi commodi. Consequuntur voluptates, ipsum recusandae aliquam. Amet, numquam?</p>
            </div>
        </div>
    </div>
</div>

    <div class="row main__team team">
        <div>
  <span class="lang-switcher lang-switcher--ru" id="switcher-ru">RU</span>
  <span class="lang-switcher lang-switcher--en" id="switcher-en">EN</span>
</div>
        <div class="team__title">
            <h2 class="en" lang="en">Our team</h2>
            <h2 class="ru" lang="ru">Наша команда</h2>
        </div>

        <div class="team__team-item-wrap">
            <div class="team__team-item team-item">
                <div class="team-item__img">
                    <img src="img/team-photo1.jpg" alt="">
                </div>

                <div class="team-item__name">
                    <p>Simon Green</p>
                </div>

                <div class="team-item__post">
                    <p>SEO</p>
                </div>

                <div class="team-item__text">
                    <p>Равным образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.</p>
                </div>

                <hr class="team-item__line">

                <ul class="team-item__social social social_circle">
                    <li><a class="social__item social__item_linkedin" href="#">BioLedCoin Linkedin</a></li>
                    <li><a class="social__item social__item_facebook" href="#">BioLedCoin Facebook</a></li>
                    <li><a class="social__item social__item_instagram" href="#">BioLedCoin Instagram</a></li>
                    <li><a class="social__item social__item_vkontakte" href="#">BioLedCoin Vkontakte</a></li>
                    <li><a class="social__item social__item_youtube" href="#">BioLedCoin Youtube</a></li>
                </ul>
            </div>

            <div class="team__team-item team-item">
                <div class="team-item__img">
                    <img src="img/team-photo2.jpg" alt="">
                </div>

                <div class="team-item__name">
                    <p>Simon Green</p>
                </div>

                <div class="team-item__post">
                    <p>SEO</p>
                </div>

                <div class="team-item__text">
                    <p>Равным образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.</p>
                </div>

                <hr class="team-item__line">

                <ul class="team-item__social social social_circle">
                    <li><a class="social__item social__item_linkedin" href="#">BioLedCoin Linkedin</a></li>
                    <li><a class="social__item social__item_facebook" href="#">BioLedCoin Facebook</a></li>
                    <li><a class="social__item social__item_instagram" href="#">BioLedCoin Instagram</a></li>
                    <li><a class="social__item social__item_vkontakte" href="#">BioLedCoin Vkontakte</a></li>
                    <li><a class="social__item social__item_youtube" href="#">BioLedCoin Youtube</a></li>
                </ul>
            </div>

            <div class="team__team-item team-item">
                <div class="team-item__img">
                    <img src="img/team-photo3.jpg" alt="">
                </div>

                <div class="team-item__name">
                    <p>Simon Green</p>
                </div>

                <div class="team-item__post">
                    <p>SEO</p>
                </div>

                <div class="team-item__text">
                    <p>Равным образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.</p>
                </div>

                <hr class="team-item__line">

                <ul class="team-item__social social social_circle">
                    <li><a class="social__item social__item_linkedin" href="#">BioLedCoin Linkedin</a></li>
                    <li><a class="social__item social__item_facebook" href="#">BioLedCoin Facebook</a></li>
                    <li><a class="social__item social__item_instagram" href="#">BioLedCoin Instagram</a></li>
                    <li><a class="social__item social__item_vkontakte" href="#">BioLedCoin Vkontakte</a></li>
                    <li><a class="social__item social__item_youtube" href="#">BioLedCoin Youtube</a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</main>

<footer class="footer">
<div class="bottom-line">
    <div class="container">
        <div class="bottom-line__logo"></div>

        <ul class="bottom-line__social social social_grey">
            <li><a class="social__item social__item_linkedin" href="#">BioLedCoin Linkedin</a></li>
            <li><a class="social__item social__item_facebook" href="#">BioLedCoin Facebook</a></li>
            <li><a class="social__item social__item_instagram" href="#">BioLedCoin Instagram</a></li>
            <li><a class="social__item social__item_vkontakte" href="#">BioLedCoin Vkontakte</a></li>
            <li><a class="social__item social__item_youtube" href="#">BioLedCoin Youtube</a></li>
        </ul>

        <div class="bottom-line__copyright">
            <p>(c) Lendbiocoin</p>
        </div>
    </div>
</div>

</footer>

<script>
      (function(){
    var body = document.getElementsByTagName('body')[0];

    var switcherRU = document.getElementById('switcher-ru');
    var switcherEN = document.getElementById('switcher-en');

    // Заранее считаем срок хранения кук
    var expires = new Date();
    expires.setDate(expires.getDate() + 366);
    expires.toUTCString();

    // Русский и английский заголовки
    var titleRU = document.getElementById('title-ru');
    var titleEN = document.getElementById('title-en');
    var title = {
      ru: titleRU.getAttribute('content'),
      en: titleEN.getAttribute('content')
    }

    var switchLang = function() {
      var lang = this.id
      lang = lang.replace('switcher-', '');

      // Меняем класс для BODY
      body.className = lang;

      // Записываем куки
      document.cookie = [
        'lang=' + lang
        ,'; expires=' + expires // используем expires, max-age не поддерживается в ИЕ
        ,'; path=/'
        ,'; domain=' + document.location.host
      ].join('');
      document.title = title[lang];
    }

    switcherRU.onclick = switchLang;
    switcherEN.onclick = switchLang;
  })();
</script>

    <script src="js/vendor.min.js"></script>
    <script src="js/app.js"></script>

    </body>
</html>
