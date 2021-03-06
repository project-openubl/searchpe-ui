#!/usr/bin/env bash
#
# Copyright 2019 Project OpenUBL, Inc. and/or its affiliates
# and other contributors as indicated by the @author tags.
#
# Licensed under the Eclipse Public License - v 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.eclipse.org/legal/epl-2.0/
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#


echo "===================================="
read -p "Enter Release: " releaseVersion
read -p "Enter Next Release: " nextVersion
read -s -p "Enter Github Token: " token

# Update to release
npm version --new-version $releaseVersion --allow-same-version --no-git-tag-version
npm version --prefix electron/ --new-version $releaseVersion --allow-same-version --no-git-tag-version

git add .
git commit -m "Release $releaseVersion"
git push "https://$token@github.com/project-openubl/searchpe-ui.git"

# # Create tag and push
git tag $releaseVersion
git push "https://$token@github.com/project-openubl/searchpe-ui.git" --tags

# # Create next snapshot
npm version --new-version $nextVersion --no-git-tag-version
npm version --prefix electron/ --new-version $nextVersion --no-git-tag-version

git add .
git commit -m "Prepare next release $nextVersion"
git push "https://$token@github.com/project-openubl/searchpe-ui.git"
