# Introduction To Git
---
## Learning Competencies
---
  - Work with basic git commands.
  - Understand basic github workflow for **Phase One** challenges
  - Understand conventions for committing

## Summary
---
We're going to learn some fundamentals of git and github. You will be given some basic markdown files to work with. Your challenge is to follow the git commands in order to better understand how you will be wworking with Git and Github for Phase One. 

Phase Two and Phase Three will build on these conecepts developing your skills to work in a team environment.


## Releases
---
### Retrieving Code
#### clone
All of your challenges have been stored in a [remote repository](https://help.github.com/articles/about-remote-repositories/). In order for you to start working on a challenge you have to get a local copy of challenge to work with. Having a local copy is how you can make changes without effecting other developers.

[Clone](http://git-scm.com/docs/git-clone) the Introduction To Git Challenge from github

`$ git clone URL_TO_REPO`

#### checkout
Now that you have a local copy of the code, we need to create a branch so that our changes are stored in a safe non destructive place. In order to do this we use the command [git checkout](http://git-scm.com/docs/git-checkout) with the **b** flag to create a new branch.

When you create a new branch, you want to name it with your user github name. If you are working in a pair seperate the names with a **-**

Checkout your own branch to begin working

`$ git checkout -b YOUR_GITHUB_USERNAME` 

You can now see that you are own your own branch by using the [git branch](http://git-scm.com/docs/git-branch)command with the **l** flag. 

`$ git branch -l`

Finally you can use git checkout to switch between branches by following the command with the branch name.

`$ git checkout master`

Now check which branch you are in. Cool right? Now checkout your branch again so we can move onto making changes.

### Making Changes
#### add
Since we can make changes safely create a new markdown (.md) file in the **exercise** folder with the name `hello-world.md`. Insert `# Hello World` on the first line of the file and save it.

let's see what changes have been made to our repository using the [git status](http://git-scm.com/docs/git-status) command.

`$ git status`

This should bring up a single item under the Untracked Files item. Read the message that the prompt tells you. `(use "git add <file>..." to include in what will be committed)`

Using [git add](http://git-scm.com/docs/git-add) allows us to choose what changes will be included in a given commit. Add the untracked file using git add. 

`$ git add hello-world.md`

  - you can also use (**.**) to add all of the changes at once. 

Using git status we should be able to see that our file hello-world.md has moved from Untracked Files to the Changes to be commited list.

#### commit
In order to make changes permanent we use the [git commit](http://git-scm.com/docs/git-commit) command. This will take all of the changes that are listed under the Changes to be committed list group them, allow you to enter a message about what has changed and records them to the repository. 

The message along with the commit should be a **clear description** of what is happening in this set of changes.

`$ git commit` 

This should open your default editor. Enter a clear description (Adding hello-word.md file ) save and close it.

  - You can also use the **-m** flag to commit with the message in line.
  - `$ git commit -m 'Adds hello-world.md file'`

#### push
Now all of the changes that you have made have have been recorded locally. That's awesome, although as long as they are local no other team member will have the ability to access them. The solution is that we use [git push](http://git-scm.com/docs/git-push) with the origin set to your branch name. This will add your new branch, and changes to the remote repository. Giving other users acess to your changes.

`$ git push origin YOUR_GITHUB_USERNAME` 

### Practice
  1. Create a new file named 'my-contact.md'. In that file add your contact information for your cohort.    
    - Name
    - Cell Phone
    - Email
    - Github Username
  2. Push the changes to the your branch.
  3. Find all of the github users names for your checkin groups, checkout each of their branches and save the information.




##Resources
---
  - [Remote Repositories](https://help.github.com/articles/about-remote-repositories/)
  - [Git Clone](http://git-scm.com/docs/git-clone) 
  - [Git Checkout](http://git-scm.com/docs/git-checkout)
  - [Git Branch](http://git-scm.com/docs/git-branch)
  - [Git Status](http://git-scm.com/docs/git-status)
  - [Git Add](http://git-scm.com/docs/git-add)
  - [Git Commit](http://git-scm.com/docs/git-commit)
