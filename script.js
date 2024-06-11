document.addEventListener('DOMContentLoaded', function() {
    const branchOptions = document.querySelectorAll('.branch-option');

    branchOptions.forEach(option => {
        option.addEventListener('click', function
            () {
                const branch = option.getAttribute('data-branch');
                const branchTitle = branchName(branch);
                localStorage.setItem('selectedBranch', branch);
                window.location.href = `branch.html`;
            });
        });
    
        const cycleOptions = document.querySelectorAll('.cycle-option');
    
        cycleOptions.forEach(option => {
            option.addEventListener('click', function() {
                const cycle = option.getAttribute('data-cycle');
                localStorage.setItem('selectedCycle', cycle);
                const branch = localStorage.getItem('selectedBranch');
                const branchTitle = branchName(branch);
                switch (cycle) {
                    case 'physics':
                        window.location.href = `physics.html`;
                        break;
                    case 'chemistry':
                        window.location.href = `chemistry.html`;
                        break;
                    default:
                        break;
                }
            });
        });
    
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', goBack);
        }
    
        // Function to go back in history
        function goBack() {
            window.history.back();
        }
    
        function branchName(branch) {
            switch (branch) {
                case 'ai-data-science':
                    return 'Artificial Intelligence & Data Science';
                case 'ai-machine-learning':
                    return 'Artificial Intelligence & Machine Learning';
                case 'biotechnology':
                    return 'Biotechnology';
                case 'civil-engineering':
                    return 'Civil Engineering';
                case 'computer-communication':
                    return 'Computer & Communication Engineering';
                case 'computer-science':
                    return 'Computer Science & Engineering';
                case 'full-stack':
                    return 'Computer Science (Full Stack Development)';
                case 'cyber-security':
                    return 'Computer Science & Engineering (Cyber Security)';
                case 'electrical-electronics':
                    return 'Electrical & Electronics Engineering';
                case 'electronics-communication':
                    return 'Electronics & Communication Engineering';
                case 'electronics-vlsi':
                    return 'Electronics Engineering (VLSI Design & Technology)';
                case 'electronics-act':
                    return 'Electronics & Communication (ACT)';
                case 'information-science':
                    return 'Information Science & Engineering';
                case 'mechanical-engineering':
                    return 'Mechanical Engineering';
                case 'robotics-ai':
                    return 'Robotics & Artificial Intelligence';
                default:
                    return '';
            }
        }
    
        function cycleName(cycle) {
            switch (cycle) {
                case 'physics':
                    return 'Physics Cycle';
                case 'chemistry':
                    return 'Chemistry Cycle';
                default:
                    return '';
            }
        }
    });
    