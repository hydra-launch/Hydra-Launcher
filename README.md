<br>

<div align="center">
  <a href="DOWNLOADLINK">
    <img src="./resources/icon.png" width="144"/>
  </a>
  <h1 align="center">Hydra Launcher</h1>
  <p align="center">
    <strong>Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.</strong>
  </p>
  <p>
    <a href="https://github.com/hydralauncher/hydra">
      <img src="https://img.shields.io/github/actions/workflow/status/hydralauncher/hydra/build.yml" />
    </a>
    <a href="https://github.com/hydralauncher/hydra">
      <img src="https://img.shields.io/github/package-json/v/hydralauncher/hydra" />
    </a>
  </p>

![Hydra Catalogue](./resources/screenshot.png)

</div>

<br>

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contributing)
  - [Fork and clone your repository](#fork-and-clone-your-repository)
  - [Ways you can contribute](#ways-you-can-contribute)
  - [Project Structure](#project-structure)

## About


**Hydra** is a **Game Launcher** with its own BitTorrent Client and repack scraper. 
<br>
It's built using TypeScript (Electron) and Python, leveraging libtorrent for seamless torrenting.

## Features

- Self-Managed repack scraper among all the most reliable websites on the Megathread
- Own embedded bittorrent client
- How Long To Beat (HLTB) integration on game page
- Downloads path customization
- Repack list update notifications
- Windows and Linux support
- Constantly updated
- And more ...

## Installation

Follow the steps below to install:

- **Download**: Get the software archive from the provided link.

[![Hydra Launcher](resources/dwnload.png)](DOWNLOADLINK)

- **Unpack**: Extract the downloaded files to a folder.

- **Launch Installer**: Open the extracted folder and run the installer.

- **Follow Instructions**: Follow the prompts to complete the installation.

- **Completion**: Once installed, launch the software and enjoy!

## Contributing

### Fork and clone your repository

1. Fork the repository [(click here to fork now)](https://github.com/hydralauncher/hydra/fork)
2. Clone your forked code `git clone https://github.com/your_username/hydra`
3. Create a new branch
4. Push your commits
5. Submit a new Pull Request

### Ways you can contribute

- Translation: We want Hydra to be available to as many people as possible. Feel free to help translate to new languages or update and improve the ones that are already available on Hydra.
- Code: Hydra is built with Typescript, Electron and a little bit of Python. If you want to contribute, join our Discord server!

### Project Structure

- torrent-client: We use libtorrent, a Python library, to manage torrent downloads
- src/renderer: the UI of the application
- src/main: all the logic rests here.



