# Basic Git Guide: Stop Developing Directly on `main`

The goal is to learn how to work with branches to isolate changes and avoid issues on the `main` branch.

## Step 1: Check Out Your Current Branch

Open your terminal or command prompt, navigate to your project folder, and run:

```bash
git status
```

Observe the line that starts with "On branch". Make sure it says `main`.

## Step 2: Update the `main` Branch

Before starting any new work, download the latest changes from the remote repository to your local `main` branch:

```bash
git pull origin main
```

## Step 3: Create a New Branch

To work on a new feature or fix, create a separate branch from `main`. Choose a descriptive name for your branch. For example: `feature/login-ui`. Run:

```bash
git checkout -b feature/your-branch-name
```

This creates the branch and switches you to it.

## Step 4: Make Your Changes and Commit

While you work, save your changes with frequent commits. Each commit should represent a logical unit of work. First, add the modified files to the staging area:

```bash
git add .
```

Then, save the changes with a descriptive message:

```bash
git commit -m "feat: Initial implementation of the login user interface"
```

## Step 5: Push Your Branch to the Remote Repository (First Time)

To allow others to see your work and to have a backup, upload your local branch to the remote repository:

```bash
git push -u origin feature/your-branch-name
```

The `-u` option links your local branch with the remote one. In future `push` commands from this branch, you will only need `git push`.

## Step 6: Continue Working and Committing

Keep developing on your branch and save your progress with `git add .` and `git commit -m "Your commit message"`.

## Step 7: Merge Your Branch with the `main` Branch

When your work is finished and tested, integrate it into the `main` branch:

1.  **Switch to the `main` branch:**

    ```bash
    git checkout main
    ```

2.  **Update the `main` branch:**

    ```bash
    git pull origin main
    ```

3.  **Merge your branch:**

    ```bash
    git merge feature/your-branch-name
    ```

    If there are conflicts (changes in the same lines of code), Git will inform you, and you will need to resolve them by editing the files. Then, use `git add <file>` to mark the conflicts as resolved.

4.  **Commit the Merge:** Save the merging of your branch into `main`:

    ```bash
    git commit -m "Merge branch 'feature/your-branch-name' into main"
    ```

5.  **Push the Merged `main` Branch:**

    ```bash
    git push origin main
    ```

## Step 8: Delete the Branch (Optional)

Once your branch has been merged and pushed, you can delete the local branch:

```bash
git branch -d feature/your-branch-name
```

And the remote branch:

```bash
git push origin --delete feature/your-branch-name
```

## Key Commands:

* `git status`: Shows the repository status and the current branch.
* `git pull origin main`: Downloads remote changes to the local `main` branch.
* `git checkout -b <branch-name>`: Creates and switches to a new branch.
* `git add .`: Adds all changes to the staging area.
* `git commit -m "<message>"`: Saves changes with a message.
* `git push -u origin <branch-name>`: Uploads the local branch to the remote repository (first time).
* `git checkout main`: Switches to the `main` branch.
* `git merge <branch-name>`: Integrates changes from the specified branch into the current one.
* `git branch -d <branch-name>`: Deletes a local branch.
* `git push origin --delete <branch-name>`: Deletes a remote branch.
