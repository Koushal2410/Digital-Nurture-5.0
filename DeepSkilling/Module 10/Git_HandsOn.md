# Module 10 - Version Control (GIT) Hands-On Lab Guide

This guide details the commands, output examples, and configurations implemented to complete the 5 Git hands-on exercises assigned in the CTS Digital Nurture 5.0 handbook.

---

## Exercise 1: Git Setup and Configuration

### Goal
Configure the Git environment, set the default editor, initialize a repository, track files, and interact with a remote.

### Steps & Commands

1. **Verify Git Installation**:
   ```bash
   git --version
   # Output: git version 2.43.0.windows.1
   ```

2. **Configure Identity**:
   ```bash
   git config --global user.name "Koushal"
   git config --global user.email "koushal@example.com"
   ```

3. **Verify Settings**:
   ```bash
   git config --list
   # Output:
   # user.name=Koushal
   # user.email=koushal@example.com
   ```

4. **Integrate notepad++.exe as Default Editor**:
   Add Notepad++ path to system variables and set config:
   ```bash
   git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

5. **Verify Editor Configuration**:
   ```bash
   git config --global -e
   ```

6. **Initialize Project Repository (`GitDemo`)**:
   ```bash
   mkdir GitDemo
   cd GitDemo
   git init
   # Output: Initialized empty Git repository in C:/.../GitDemo/.git/
   ```

7. **Create welcome.txt and Track changes**:
   ```bash
   echo "welcome to Git session" > welcome.txt
   git add welcome.txt
   git commit -m "Initial commit: Add welcome.txt"
   ```

8. **Remote Operations**:
   ```bash
   git remote add origin https://github.com/Koushal2410/Digital-Nurture-5.0.git
   git pull origin main
   git push origin main
   ```

---

## Exercise 2: Working with .gitignore

### Goal
Ignore files with `.log` extension and a `log/` folder from being tracked.

### Steps & Commands

1. **Create .gitignore file**:
   ```bash
   echo "*.log" > .gitignore
   echo "log/" >> .gitignore
   ```

2. **Create log files and directory**:
   ```bash
   mkdir log
   echo "system startup event" > log/startup.log
   echo "database query log" > query.log
   ```

3. **Verify Status**:
   ```bash
   git status
   # Output:
   # On branch main
   # Untracked files:
   #   .gitignore
   # (Note: query.log and log/ are correctly ignored by Git)
   ```

4. **Commit Ignored Rules**:
   ```bash
   git add .gitignore
   git commit -m "Add .gitignore to exclude log files and log directory"
   ```

---

## Exercise 3: Branching & Merging

### Goal
Create a branch `GitNewBranch`, switch to it, make changes, commit, switch to master, merge, verify logs, and clean up.

### Steps & Commands

1. **Create and Switch Branch**:
   ```bash
   git checkout -b GitNewBranch
   # Output: Switched to a new branch 'GitNewBranch'
   ```

2. **Add a file to the Branch**:
   ```bash
   echo "Feature modification on branch" > feature.txt
   git add feature.txt
   git commit -m "Add feature.txt in GitNewBranch"
   ```

3. **Switch back to master (main)**:
   ```bash
   git checkout main
   ```

4. **Verify Differences**:
   ```bash
   git diff main GitNewBranch
   ```

5. **Merge Branch to main**:
   ```bash
   git merge GitNewBranch
   # Output: Updating 5808f02..78c1ef9
   # Fast-forward
   #  feature.txt | 1 +
   #  1 file changed, 1 insertion(+)
   #  create mode 100644 feature.txt
   ```

6. **Observe Logs**:
   ```bash
   git log --oneline --graph --decorate
   # Output:
   # * 78c1ef9 (HEAD -> main, origin/main, GitNewBranch) Add feature.txt in GitNewBranch
   # * 5808f02 Initial commit
   ```

7. **Delete Merged Branch**:
   ```bash
   git branch -d GitNewBranch
   # Output: Deleted branch GitNewBranch (was 78c1ef9).
   ```

---

## Exercise 4: Conflict Resolution (3-Way Merge)

### Goal
Resolve merge conflicts when both main and branch alter the same file.

### Steps & Commands

1. **Create and Switch Branch `GitWork`**:
   ```bash
   git checkout -b GitWork
   ```

2. **Create hello.xml**:
   ```xml
   <!-- hello.xml in GitWork -->
   <root>
       <message>Hello from GitWork branch</message>
   </root>
   ```
   ```bash
   git add hello.xml
   git commit -m "Add hello.xml on GitWork"
   ```

3. **Switch to main & Create conflicting hello.xml**:
   ```bash
   git checkout main
   ```
   ```xml
   <!-- hello.xml in main -->
   <root>
       <message>Hello from main branch</message>
   </root>
   ```
   ```bash
   git add hello.xml
   git commit -m "Add hello.xml on main"
   ```

4. **Attempt Merge (Triggers Conflict)**:
   ```bash
   git merge GitWork
   # Output: 
   # Auto-merging hello.xml
   # CONFLICT (add/add): Merge conflict in hello.xml
   # Automatic merge failed; fix conflicts and then commit the result.
   ```

5. **Identify Conflict markup inside hello.xml**:
   ```xml
   <<<<<<< HEAD
   <root>
       <message>Hello from main branch</message>
   </root>
   =======
   <root>
       <message>Hello from GitWork branch</message>
   </root>
   >>>>>>> GitWork
   ```

6. **Resolve Conflict**:
   Edit `hello.xml` to merge changes (3-way merge resolution):
   ```xml
   <root>
       <message>Hello from main branch</message>
       <message>Hello from GitWork branch</message>
   </root>
   ```

7. **Stage & Commit Resolved Changes**:
   ```bash
   git add hello.xml
   git commit -m "Merge branch 'GitWork' and resolve conflict in hello.xml"
   ```

8. **Clean Up Branch**:
   ```bash
   git branch -d GitWork
   ```

---

## Exercise 5: Remote Operations

### Goal
Ensure local and remote repositories are synchronized.

### Steps & Commands

1. **Pull remote changes**:
   ```bash
   git pull origin main
   ```

2. **Push local commits**:
   ```bash
   git push origin main
   ```
