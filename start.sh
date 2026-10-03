#!/usr/bin/env bash
# Script de lancement de l'application Mot Magique
cd "$(dirname "$0")"
echo "✨ Démarrage de Mot Magique sur http://localhost:5173 ..."
npm run dev -- --host 0.0.0.0 --port 5173
