# Quest Service - Frontend

The frontend application for Quest Service, a thought-provoking logic puzzle game built on the Stellar blockchain. This React-based interface provides an engaging and intuitive user experience for players to solve puzzles and earn on-chain rewards.

## 🎨 Design

View the complete design system and UI mockups on Figma:
[Quest Service Design - Figma](https://www.figma.com/design/c2pahgpn5ZQX0UHXD9q9Ot/LogiQuest?node-id=358-997&p=f&t=0HEwchnHZ2n7Dt8L-0)

## 🚀 Features

* **Interactive Puzzle Interface**: Smooth, responsive UI for solving logic puzzles
* **Stellar Wallet Integration**: Connect with Freighter and other Stellar wallets
* **Real-time Progress Tracking**: Visual feedback on puzzle completion and achievements
* **NFT Gallery**: Display earned achievement NFTs from completed puzzles
* **Token Management**: View and manage XLM and custom tokens for unlocking content
* **Responsive Design**: Optimized for desktop and mobile gameplay

## 🛠️ Tech Stack

* **Framework**: React 18+
* **Styling**: TailwindCSS
* **State Management**: React Context API / Redux (if applicable)
* **Blockchain Integration**: Stellar SDK, Soroban RPC
* **Wallet Connection**: Freighter Wallet API
* **Build Tool**: Vite / Create React App
* **Type Safety**: TypeScript (if applicable)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/quest-service-frontend.git

# Navigate to the project directory
cd quest-service-frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Stellar network configuration

# Start the development server
npm run dev
```

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```env
VITE_STELLAR_NETWORK=testnet
VITE_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
VITE_BACKEND_API_URL=http://localhost:3000
VITE_CONTRACT_ADDRESS=your_contract_address
```

## 🎮 Usage

1. **Connect Wallet**: Click "Connect Wallet" to link your Freighter wallet
2. **Browse Puzzles**: Explore available puzzles organized by difficulty
3. **Solve Challenges**: Complete logic puzzles to earn points and rewards
4. **Claim NFTs**: Mint achievement NFTs for completing puzzle milestones
5. **Unlock Content**: Use tokens to access hints and special levels

## 📁 Project Structure

```
quest-service-frontend/
├── public/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── services/        # API and blockchain services
│   ├── utils/           # Helper functions
│   ├── hooks/           # Custom React hooks
│   ├── contexts/        # React contexts
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .env.example
├── package.json
└── README.md
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 🚢 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the **MIT License**.

## 🔗 Related Repositories

* [Quest Service Backend](https://github.com/MindFlowInteractive/quest-service)
* [Quest Service Smart Contracts](https://github.com/MindFlowInteractive/quest-contract)
## 💬 Support

For questions or support, please open an issue or join our community discussions.

## Contributing Guide


How to Contribute 

• Fork the repository. 

• Clone your fork to your local machine. 

• Create a new branch for your task. 

git checkout -b feature/your-task-name 

• Make your changes. 

• Commit clearly. 

git commit -m "Add: short description" 

• Push your branch. 

git push origin feature/your-task-name 

• Open a Pull Request.
