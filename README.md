# express-typescript-configuration
Simple configuration for express and typescript development
# Requirement
## Instalasi NodeJS
Ada beberapa cara untuk menginstall NodeJS, secara umum kamu bisa pilih opsi "general".
Atau menggunakan package manager pada windows, mac ataupun linux.

### General
* Buka situs [download page nodejs](https://nodejs.org/en/download/)
* Pilih OS kamu dan unduh filenya
* Install

### Windows
* Install winget dari [microsoft store](https://www.microsoft.com/en-id/p/app-installer/9nblggh4nns1?ocid=9nblggh4nns1_ORSEARCH_Bing&rtc=2&activetab=pivot:overviewtab) atau
dari halaman [github](https://github.com/microsoft/winget-cli/releases/latest)
* Install menggunakan command
    ```sh
    winget install -e --id OpenJS.Nodejs
    ```
* Untuk melihat package lain yang bisa kamu install dapat kamu buka [disini](https://winget.run)

### MacOS dan Linux
#### 1. Menggunakan Brew
* Kunjungi [situs brew](https://brew.sh/)
* Jalankan perintah untuk menginstall brew
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
* Install nodejs
    ```sh
    brew install node
    ```
#### 2. Menggunakan Node
* Kunjungi [repositori nvm](https://github.com/nvm-sh/nvm)
* Install wget atau curl
    ```sh
    sudo apt install wget
    // atau
    sudo apt install curl
    ```
* Exekusi di terminal
    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
    ```
    atau
    ```sh
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
    ```

## Instalasi Typescript dan ts-node
Install typescript dan ts-node
```sh
npm i -G typescript ts-node
```

# Penggunaan
* Clone projectnya
    ```sh
    git clone https://github.com/AlgobashTeam/express-typescript-configuration.git
    ```
* Compile typescript dengan ```npm run build```
* Jalankan program dengan ```npm run start```
* Pergi ke halaman https://localhost:8080
