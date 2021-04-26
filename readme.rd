#!/bin/bash
# Sometimes you need to move your existing git repository
# to a new remote repository (/new remote origin).
# Here are a simple and quick steps that does exactly this.
#
# Let's assume we call "old repo" the repository you wish
# to move, and "new repo" the one you wish to move to.
#
### Step 1. Make sure you have a local copy of all "old repo"
### branches and tags.
# Fetch all of the remote branches and tags:
git fetch origin

# View all "old repo" local and remote branches:
git branch -a

# If some of the remotes/ branches doesn't have a local copy,
# checkout to create a local copy of the missing ones:
git checkout -b <branch> origin/<branch>

# Now we have to have all remote branches locally.


### Step 2. Add a "new repo" as a new remote origin:
git remote add new-origin git@github.com:user/repo.git


### Step 3. Push all local branches and tags to a "new repo".
# Push all local branches (note we're pushing to new-origin):
git push --all new-origin

# Push all tags:
git push --tags new-origin


### Step 4. Remove "old repo" origin and its dependencies.
# View existing remotes (you'll see 2 remotes for both fetch and push)
git remote -v

# Remove "old repo" remote:
git remote rm origin

# Rename "new repo" remote into just 'origin':
git remote rename new-origin origin


### Done! Now your local git repo is connected to "new repo" remote
### which has all the branches, tags and commits history.

To make a new directory do:

   mkdir directory-name
To remove a directory that does not files inside do:
   rmdir directory-name
If the directory has files, you can do the following:
   rm -rv directory-name
and you will be asked for each file (or subdirectory) if you want to remove it; or
   rm -frv directory-name
that will remove all files (and subdirectories) without asking any questions. 

Changing the working directory
To change ("enter") into a directory do:

   cd directory-name
This assumes that the new directory is a subdirectory of the one you are currently working on. If that is not the case, you will have to type the name, for example:
   cd /usr/local/share/bin
To go to your home directory do simply:
   cd



   To change the name of a directory do:

   mv directory-name new-name