//
//  ContentView.swift
//  Smart Trainer
//
//  Created by John Tomko on 12/18/21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Button(action: {
                print("Starting Set")
            }) {
                Text("Start Set")
            }
            Button(action: {
                print("Ending Set")
            }) {
                Text("End Set")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
