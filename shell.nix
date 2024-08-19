{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs  # Adds Node.js to the environment
  ];

  shellHook = ''
    # Optional: Automatically installs npm packages on entering the shell
    if [ -f package.json ] && ! [ -d node_modules ]; then
      npm install
    fi
  '';
}
