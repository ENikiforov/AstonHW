#!/usr/bin/python3

import re
import sys

red_color = "\033[1;31m"
color_off = "\033[0m"
blue_color = "\033[1;34m"
yellow_color = "\033[1;33m"

commit_msg_filepath = sys.argv[1]

regex = r"feat/fix/chore"
error_msg = "Commit message format must match regex " + regex

with open(commit_msg_filepath, "r+") as file:
    commit_msg = file.read()
    if re.search(regex, commit_msg):
        print("ASTONJS-1" + regex + "commit msg")
    else:
        print(red_color + "Bad commit " + blue_color + commit_msg)
        print(yellow_color + error_msg)
        print("commit-msg hook failed (add --no-verify to bypass)")
        sys.exit(1)
