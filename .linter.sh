#!/bin/bash
cd /home/kavia/workspace/code-generation/ecovoyage-planner-27300-473a4e29/eco_voyage_planner
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

