<hr />
<div align="center">
    <img src="public/pawtracker.png" alt="Logo" width='100px' height='auto'/>
</div>
<hr />

## PawTracker

The perfect tool for PAW to check $PAW transactions.

## What is Paw?

PAW is a animal themed digital currency. More information is available over on the official [Paw repository](https://github.com/paw-digital/paw-node).

[![Twitter Follow](https://img.shields.io/twitter/follow/PAW_digital?style=social)](https://twitter.com/intent/follow?screen_name=PAW_digital)
[![Discord](https://img.shields.io/badge/discord-join%20chat-orange.svg?logo=discord&color=7289DA)](https://discord.gg/DjXn6bb3aE)

| Link | Description |
| :----- | :------ |
[PAW.digital](https://paw.digital) | PAW digital currency Homepage


## Installation Guide On Ubuntu 20.04

### Installing mongo
```bash
# If you have mongo 3.6 already installed and want to keep it you can skip this.
# Careful purge command may erase more than what is wanted. Not recommended to use on a server that already uses or implements mongo in any way.
# sudo apt-get purge mongo*

sudo wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt update
sudo apt install mongodb-org
sudo systemctl start mongod.service
```

### Create config
Copy ecosystem.config.sample.js to ecosystem.config.js and update the configuration data

### Install prerequisites and start
```bash
npm install
npm i pm2 -g
pm2 start ecosystem.config.js
```

To see logs pm2 ls and pm2 logs 0 ( or whatever else the id is )
  

## Acknowledgements

Special thanks to the following!

- [NanoLooker](https://github.com/running-coder/nanolooker) - The original one
- [My Nano Ninja](https://mynano.ninja/)
- [NanoCrawler](https://nanocrawler.cc/)
