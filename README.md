# font-character-inspector
Inspect unicode characters associated with an icon font

## Usage

Put the icon font you want to inspect in the `fonts/` directory (replacing the existing fonts -- which means you'd rename your font files in the process), then run a web server (e.g. with `python -m SimpleHTTPServer` on the command line from the folder containing index.html).

When you view your index.html in the browser it'll output something similar [to this](http://jsbin.com/ziwol/7/embed?output").

## Credits 

Based on <a href="https://helloanselm.com/2014/parsing-iconfont-characters-automatically/">'Parsing Iconfont Characters Automatically'</a> by Anselm Hannemann ([@anselmh](https://github.com/anselmh)) See also <a href="http://jsbin.com/ziwol/7/embed?html,css,js,output">the jsbin code</a>.

I've also included the open source web font from [@erikflowers](https://github.com/erikflowers)'s [weather-icons](https://github.com/erikflowers/weather-icons) project as an example font (this is a change from @anselmh's jsbin).

